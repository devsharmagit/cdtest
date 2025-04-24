import express from "express";
import { client } from "@repo/db/client";

const app = express();

app.use(express.json())

app.get("/", (req, res)=>{
    res.status(200).json({
        message: "the http server is running fine"
    })
    return
})

app.post("/signup", async (req, res)=>{
const {name, email, password} = req.body
const newUser = await client.user.create({
    data: {
        email,
        name, 
        password
    }
})

res.status(201).json({
    message: "succesfully user created!",
    userData: newUser
})

return 
})

app.listen(3001, ()=>{
    console.log("The app is running fine")
} )