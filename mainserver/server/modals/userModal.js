const mongoose = require("mongoose")

const cartItemSchema = new mongoose.Schema({
    name: { type: String, required: true, },
    _id: { type: String, required: true, },
    image: { type: String, required: true, },
    varient: { type: String, required: true, },
    quantity: { type: Number, required: true, },
    prices: [], // Use the priceSchema as a subdocument in the prices array
    price: { type: Number, required: true, },
});

const userSchema = mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cart: { type: [cartItemSchema], default: [] },
    isAdmin: { type: Boolean, require, default: false },
}, {
    timestamps: true,
})

const userModal = mongoose.model('users', userSchema);
module.exports = userModal;