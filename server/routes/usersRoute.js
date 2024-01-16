const express = require("express");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userModal = require("../modals/userModal")

const router = express.Router();

router.post("/register", async (req, res) => {
    const { fname, lname, email, password } = req.body;

    let user = await userModal.findOne({email});
    if(user){
        return res.send({
            success: false,
            message: "User already exists"
        })
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new userModal({ fname, lname, email, password: hashedPassword })

    try {
        await newUser.save()
        res.send({ message: 'User Regiseterd SuccessFully' })
    } catch (error) {
        return res.status(400).json({ message: error })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModal.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const validPassword = await(bcrypt.compare(password, user.password))
        if(!validPassword){
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        const token = jwt.sign({_id: user._id}, process.env.jwt_secret, {expiresIn: '30d'})
        
        const cookiesOptions = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            httpOnly: true
        }
        const userData = {
            _id: user._id,
            fname: user.fname,
            lname: user.lname,
            email: user.email,
            isAdmin: user.isAdmin
        }

        res.cookie('jwt', token, cookiesOptions);

        res.status(200).json({ message: "Login successful", userData });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
})

router.post('/isLoggedIn', async(req, res)=>{
    console.log(req.body )
})

module.exports = router