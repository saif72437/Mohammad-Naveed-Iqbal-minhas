const express = require("express")
const zod = require("zod")


const app = express()
app.use(express.json())

const authSchema = zod.object({
    email: zod.email(),
    password: zod.string().min(8),
    fullName: zod.string().min(3),
    age: zod.number()
})

app.post("/signup", function(req, res){
    const response = authSchema.safeParse(req.body);
    
    if(response.success){
        res.json({
        mssg: "Account created Succssfully"
    })
    }

    res.status(403).json({
        mssg: "Invalid Inputs"
    })

    
})



app.listen(3000)

