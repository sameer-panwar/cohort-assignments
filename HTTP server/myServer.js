const express=require("express");
const app=express();

function sum(n){
    let result=0;
    for(let i=0; i<n; i++){
        result+=i;
    }
    return result;
}

app.get('/', (req, res)=>{
    const n= req.query.n;
    const result = sum(n);
    res.send(`Hi your answer is ${result}`);

})

app.listen(3002); 