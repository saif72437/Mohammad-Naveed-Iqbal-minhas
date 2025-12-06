const express = require("express")

const app = express()

function checkAuthMiddleware(req, res, next){
    const token = req.headers["authorization"]
    
    if(!token){
        res.json({
            mssg: "Token is required"
        })
    }

    next()
}

app.use(checkAuthMiddleware)

app.use(express.json())

app.get("/profile",   (req, res)=>{

    let user = {
        username: "saif123",
        fullName: "Saifullah Khan",
        bio: "I'm Web Developer"
    }

    res.json({
        user
    })




})

app.get("/about", function(req, res){

})


app.listen(3000)