const express=require('express');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const { string } = require('zod');

const secretKey='12121212';

const app=express();

app.use(express.json());

mongoose.connect('mongodb+srv://sameerpanwar:Sp%40817161@sameersdatabase.gc3nk.mongodb.net/user_app');

const User = mongoose.model("signUsers", {username: String, password: String});

app.post('/signin',async (req,res)=>{
    let headers={
        username: req.body.username,
        password: req.body.password
    }

    let existingUser= await User.findOne({username: headers.username});

    if(existingUser){
        return res.status(200).json({
            msg: "user exist, NOOB"
        })
    }

    const token= jwt.sign(headers, secretKey);

    const userData= new User({
        username: headers.username,
        password: headers.password
    })

    await userData.save()

    res.status(400).json({
        msg: "You are In",
        Authorization: token
    })
})

app.get('/token/', (req, res)=>{
    const token = req.query.token;
    jwt.verify(token, secretKey, (err, decode)=>{
        if(err){
            res.status(404).json({
                msg: "Invalid Token"
            })
        }else{
            res.status(400).json({
                msg: "You are IN",
                decode
            })
        }
    })
})

app.get('/', (req, res)=>{
    res.status(400).json({
        msg: 'You are connected'
    })
})

app.listen(3000, ()=>{
    console.log("listening to port 3000");
})