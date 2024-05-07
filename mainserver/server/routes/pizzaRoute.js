const express= require("express");
const router = express.Router();

const PizzaModal =require('../modals/pizzaModal')

router.get("/getallpizzas", async (req, res)=>{
    try {
        const pizzas = await PizzaModal.find().exec();
        res.send(pizzas);
    }
    catch(error){
        return res.status(400).json({message: error});
    }
})

module.exports= router;