const express =require("express");
const { createTodo, updateTodo } = require("./type");
const { todos } = require("./db");
const cors=require("cors")

const app=express();

app.use(express.json());

app.use(cors());


app.post('/todo',async (req, res)=>{
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    await todos.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    
    res.status(200).json({
        msg: "Your todo is added"
    })
})

app.get('/todos',async (req, res)=>{
    const Todo= await todos.find({});
    res.json(Todo);
})

app.put('/completed',async (req, res)=>{
    const createPayload=req.body;
    const parsePayload=updateTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong input"
        })
        return;
    }

    await todos.update({
        _id: req.body.id
    },{
        completed: true
    }).status(200).json({
        msg: "your todo is completed"
    })
})

app.listen(3000,()=>{
    console.log("Listening to port 3000");
});