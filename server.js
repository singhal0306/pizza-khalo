const express = require("express");
const cors = require("cors");
const cookieParser =require("cookie-parser");
require('dotenv').config() 

const db = require("./server/config/dbConfig")

const app = express();

const pizzaRoute = require("./server/routes/pizzaRoute");
const userRoute = require("./server/routes/usersRoute")
const ordersRoute = require("./server/routes/ordersRoute")
const cartRoute = require("./server/routes/cartRoute")

app.use(express.json());
app.use(cors());
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("hello");
})

app.use('/api/pizzas', pizzaRoute);
app.use('/api/users', userRoute);
app.use('/api/orders', ordersRoute);
app.use('/api/cart', cartRoute);

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Server is up and running on port: 5000")
})