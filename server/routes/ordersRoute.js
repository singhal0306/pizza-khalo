const express = require("express");
const userModal = require("../modals/userModal")
const order = require("../modals/orderModal");

const router = express.Router();
const stripe = require('stripe')('sk_test_51OX0LZSGgfaszQ2KKpD19uU3o34LE9MPofPSkGrKzvTWyAkQyQsa3MHX66OYRL9SbSYi0DXFydwj5CjJCJ05XIQ200wLFMHa0O');

const { v4: uuidv4 } = require('uuid');

router.post('/placeorder', async (req, res) => {
    const { currentUser, cartItems } = req.body;

    const lineItems = cartItems.map((item) => ({
        price_data: {
            currency: 'inr',
            product_data: {
                name: item.name,
                images: [item.image]
            },
            unit_amount: item.prices[0][item.varient] * 100,
        },
        quantity: item.quantity
    }))

    const DOMAIN = 'https://localhost:3000';

    try {
        const customer = await stripe.customers.create({
            name: `${currentUser.fname} ${currentUser.lname}`.toUpperCase(),
            email: currentUser.email,
            address: {
                city: 'Bulandshahr',
                country: "US",
                line1: 'AVM School',
                line2: 'Gulaothi',
                postal_code: '203408',
                state: 'Uttar Pradesh'
            },
            metadata: {
                userId: currentUser._id,
                cart: JSON.stringify(cartItems)
            }
        });
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            currency: 'inr',
            payment_method_types: ['card'],
            // shipping_address_collection: {
            //     allowed_countries: ['IN'],
            // },
            customer: customer.id,
            line_items: lineItems,
            // success_url: `${DOMAIN}/order/success`,
            success_url: `http://localhost:5000/api/orders/order/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${DOMAIN}/cart`,
        });

        res.json({ id: session.id });

    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message,
            }
        })
    }

});

router.get('/order/success', async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    const customer = await stripe.customers.retrieve(session.customer);
    const cartItems = JSON.parse(customer.metadata.cart)
    const usedId = customer.metadata.userId
    // console.log(cartItems)
    const newOrder = new order({
        name: customer.name,
        email: customer.email,
        userId: usedId,
        orderItems: cartItems,
        orderAmount: session.amount_total,
        shippingAddress: customer.address,
        transactionId: session.id
    })

    await newOrder.save()

    try {
        const user = await userModal.findOne({ email: customer.email });
        if (!user) {
            return res.status(401).json({ message: "User Not Found" });
        }
        user.cart = [];
        await user.save();
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" });
    }

    res.redirect("http://localhost:3000/orders");
});

router.post('/getallorders', async (req, res) => {
    const { userId } = req.body;
    try {
        const orders = await order.find({ userId: userId }).sort({ _id: -1 })
        res.send(orders)
    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' })
    }
})



module.exports = router;