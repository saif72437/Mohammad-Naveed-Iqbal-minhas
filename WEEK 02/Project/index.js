const express = require('express');

const app = express()
app.use(express.json())

let ALL_TODOS = [
    {
        id: 1,
        text: "Coding",
        completed: false
    }
]

app.post("/create", function(req, res){
    const {text} = req.body;

    let newTodo = {
        id: Date.now(),
        text,
        completed: false
    }

    ALL_TODOS.push(newTodo)

    res.status(200).json({
        mssg: "todo create Successfully",
        ALL_TODOS
    })

})

app.put("/todo/:id", function(req, res){
    const id = req.params.id;

    ALL_TODOS.forEach((singleTodo)=>{
        if(singleTodo.id == id){
            singleTodo.completed = true;
        }
    })

    res.status(200).json({
        ALL_TODOS,
        mssg: "Todo update Successfully"
    })


})

app.delete("/todo/:id", function(req, res){
    const id = req.params.id;

    // delete the todo
   ALL_TODOS =  ALL_TODOS.filter((singleTodo)=>{
        return singleTodo.id != id // true => newArray, false = X
    })

    res.status(200).json({
        ALL_TODOS,
        mssg: "Todo Deleted Successfully"
    })


})


app.listen(3001)