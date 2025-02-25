const express = require('express');
const mongoose= require('mongoose');

const app= express();

app.use(express.json());

mongoose.connect("mongodb+srv://sameerpanwar:Sp%40817161@sameersdatabase.gc3nk.mongodb.net/user_app");

const User = mongoose.model('Users', {name: String, email: String, password: String});

// const user= new User({
//     name: "harkirat", 
//     email: "xug@gmail.com", 
//     password: "2345534534"
// })

app.post("/signUp", async (req, res)=>{
    const username= req.body.username;
    const email= req.body.email;
    const password= req.body.password;

    const existingUser = await User.findOne({email: email});

    if(existingUser){
        res.status(400).json({
            msg: "User already exist"
        })
    }

    const user= new User({
        name: username, 
        email: email, 
        password: password
    })

    user.save();
    res.json({
        msg: "user created Successfully"
    })
});



app.listen(3000, ()=>{
    console.log("connected to port 3000");
})