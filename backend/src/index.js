import express from "express"
import "dotenv/config"
import User from "./models/user.model.js";
import { connectDB } from "./lib/db.js";
import { clerkMiddleware } from '@clerk/express'

const app=express();
const PORT=process.env.PORT
app.use(express.json())
app.use(cors({origin:FRONTEND_URL,credentials:true}))
app.use(clerkMiddleware())

app.get("/health",(req,res)=>{
  res.status(200).json({ok:true})
});

// console.log(process.env.DB_URL)
app.listen(PORT,()=>{
  connectDB();
  console.log("Server is running on port:", PORT)});