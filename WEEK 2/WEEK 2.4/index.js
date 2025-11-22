const express = require("express")

const app = express()


app.get("/profile", function(req, res){
    // res.send("SaifullaKhan@gmail.com")
    
    // res.json({
    //     "username": "saif@gmail.com",
    //     "age": 21,
    //     "password": 123456
    // })

    res.send("<h1> this is profile page </h1>")
})


app.listen(3000)

//localhost:3000/login