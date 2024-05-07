const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  varients: [],
  prices: [],
  category: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true }
}, {
  timestamps: true,
});

// Create Pizza Model
const PizzaModal = mongoose.model('Pizza', pizzaSchema);

module.exports = PizzaModal;