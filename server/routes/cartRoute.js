const express = require("express");
const router = express.Router();
const userModal = require("../modals/userModal")

router.post("/updatecart", async (req, res) => {
    const { email, newCart } = req.body;
    try {
        const user = await userModal.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User Not Found" });
        }
        user.cart = newCart.cartItems;
        await user.save();
        res.json({ message: 'Cart updated successfully' });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" });
    }
})

router.post("/sendcartdata", async (req, res) => {
    const { email } = req.body;
    try {
        const user = await userModal.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        res.json(user.cart)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
    }
})

module.exports = router;