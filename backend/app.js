const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');

const app = express();

//Configuration and server
require('./config/configuration')(app,mongoose);

//Router
app.use('/auth',authRoutes);

app.use((error,req,res,next)=>{
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message: message});
});