import dotenv from "dotenv"
dotenv.config();
import express from "express"
const app =express()
const port=3000

app.get('/', (req,res) => {
    res.send("Hello World")
})

app.get("/youtube", (req,res) => {
    res.send("Sujal Rawat (631 Subscriber) ")
})

app.get("/login", (req,res) => {
    res.send("<h1>Login Page </h1>")
})

app.get("/instagram",(req,res) => {
    res.send("<h2>sujalrawat360 (54 Followers) ")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})