// import express from "express"
// import users from "./users.js"
// const app = express()

// app.get("/", (req, res) => {
//     res.send("Server is ready")
// })
// app.get("/api/user", (req, res) => {
//     res.send(users)
// })

// const port = process.env.PORT || 3005
// app.listen(port, () => {
//     console.log('ServSe at http://localhost:3005')
// })


const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT;
const AllRoutes = require('./routes/allroutes');


const cors = require('cors')
app.use(cors())
app.use(AllRoutes)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow these HTTP methods
    next();
});
app.listen(port)



//establishing mongodb connection
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/DocterAp").then(() => {
    console.log("connection successful")
}).catch(() => {
    console.log("connection unsuccessful")
})