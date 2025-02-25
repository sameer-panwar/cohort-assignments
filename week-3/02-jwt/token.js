const jwt= require("jsonwebtoken");
const secretKey='01010101';

const token=jwt.sign({
    id: "sameer",
    password: "12341234"
},secretKey);

console.log(token);

jwt.verify(token, secretKey, (err, decoded)=>{
    if(err){
        console.log("not valid token");
    }else{
        console.log("You are IN.",decoded)
    }
})