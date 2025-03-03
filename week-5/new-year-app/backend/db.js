const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://sameerpanwar:Sp%40817161@sameersdatabase.gc3nk.mongodb.net/TodoApp")

const todoSchema=mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todos= mongoose.model('todos', todoSchema);

module.exports={
    todos
}