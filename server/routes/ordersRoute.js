const express = require("express");
const userModal = require("../modals/userModal");
const order = require("../modals/orderModal");

const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51OX0LZSGgfaszQ2KKpD19uU3o34LE9MPofPSkGrKzvTWyAkQyQsa3MHX66OYRL9SbSYi0DXFydwj5CjJCJ05XIQ200wLFMHa0O"
);

// stripe listen --forward-to localhost:5000/api/orders/webhook
const { v4: uuidv4 } = require("uuid");
const DOMAIN = "http://localhost:3000";
// const DOMAIN = 'https://qpg4xzqq-3000.inc1.devtunnels.ms';
let cart;

router.post("/placeorder", async (req, res) => {
  const { currentUser, cartItems } = req.body;
  cart = JSON.stringify(cartItems);
  const lineItems = cartItems.map((item) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: item.name,
        images: [item.image],
      },
      unit_amount: item.prices[0][item.varient] * 100,
    },
    quantity: item.quantity,
  }));

  try {
    const customer = await stripe.customers.create({
      name: `${currentUser.fname} ${currentUser.lname}`.toUpperCase(),
      email: currentUser.email,
      address: {
        city: "Bulandshahr",
        country: "US",
        line1: "AVM School",
        line2: "Gulaothi",
        postal_code: "203408",
        state: "Uttar Pradesh",
      },
      metadata: {
        userId: currentUser._id,
      },
    });
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      currency: "inr",
      payment_method_types: ["card"],
      // shipping_address_collection: {
      //     allowed_countries: ['IN'],
      // },
      customer: customer.id,
      line_items: lineItems,
      // success_url: `${DOMAIN}/order/success`,
      success_url: `${DOMAIN}/orders`,
      cancel_url: `${DOMAIN}/cart`,
    });

    res.json({ id: session.id });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

let endpointSecret;
// const endpointSecret = "whsec_d6c1e41f9a284e9dfc44b8c21f83c0adffb9aab5e2ad56b937e85495fb69ae98";

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    // console.log(JSON.stringify(sig))
    let eventType;
    let data;

    if (endpointSecret) {
      let event;
      try {
        event = stripe.webhooks.constructEvent(
          request.body,
          sig,
          endpointSecret
        );
      } catch (err) {
        response.status(400).send(`Webhook Error: ${err.message}`);
        return;
      }
      data = event.data.object;
      eventType = event.type;
    } else {
      data = req.body.data.object;
      eventType = req.body.type;
    }
    // console.log(eventType)

    // Handle the event
    switch (eventType) {
      case "checkout.session.completed":
        // const checkoutSessionCompleted = event.data.object;
        // Then define and call a function to handle the event checkout.session.completed
        // console.log(data)

        const session = await stripe.checkout.sessions.retrieve(data.id);
        const customer = await stripe.customers.retrieve(session.customer);

        const cartItems = JSON.parse(cart);
        const usedId = customer.metadata.userId;

        const newOrder = new order({
          name: customer.name,
          email: customer.email,
          userId: usedId,
          orderItems: cartItems,
          orderAmount: session.amount_total,
          shippingAddress: customer.address,
          transactionId: session.id,
        });

        await newOrder.save();

        try {
          const user = await userModal.findOne({ email: customer.email });
          if (!user) {
            return res.status(401).json({ message: "User Not Found" });
          }
          user.cart = [];
          await user.save();
        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: "Internal server error" });
        }

        break;

      // ... handle other event types
      default:
        console.log(`${eventType}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    res.send();
  }
);

router.post("/getallorders", async (req, res) => {
  const { userId } = req.body;
  try {
    const orders = await order.find({ userId: userId }).sort({ _id: -1 });
    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = router;
