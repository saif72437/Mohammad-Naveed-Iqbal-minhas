const express = require("express")

const app = express()

app.use(express.json()) // it will allow json data comming from frontend

app.post("/login", function(req, res){
    const data = req.body;
   

    // store data in database
    console.log(data);

    res.status(500).json({
        mssg: "You are successfully loggedIn"
    })
    
})

app.get("/profile", function(req, res){
    const token = req.headers["authorization"];

    console.log(token);

    res.send("Here is your profile page")
    
})

app.delete("/post/:id", function(req, res){

    const postId = req.params.id;
    console.log(postId);

    res.send("your post is deleted successfully")
    
})

app.get("/weather", function(req, res){
    const city = req.query.city;
    console.log(city);

    res.send("here is your city weather")
    

})




app.listen(3000)