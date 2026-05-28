import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); // this will load the env variables from the .env file and make it available in the process.env object.
import userRouter from './user/user.routes.js';


const app = express();
app.listen(3001, () => console.log("Server is running eeee on port 3001 ")); 

//database connection 
import mongoose from 'mongoose';
mongoose.connect(process.env.DB_URL)
.then(() => console.log("Database connected successfully"))
.catch(() => console.log("Database connection failed"));

app.get("/", (req, res) => {
  res.json("Setup Successful :) ");
});


//app level middleware 
import morgan from 'morgan';  // this wil lsow // this wil lsow and give log of which particular api is been hit and how much time it took to respond.
app.use(morgan("dev")); // this is how we use the middleware in the app level.

app.use(express.json()); 
app.use(express.urlencoded({extended:false})); 

//if we wan to connect to middleware we use util inside the app . then we can use the middleware in the app.use() method. 

//middleware is a function that has access to the request and response objects and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

//route level middleware. 
app.use("/api/user",userRouter);
//types of middleware 1. route evel 2. app level middleware 3.third party middle ware

