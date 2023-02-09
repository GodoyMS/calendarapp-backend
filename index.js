const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv').config();

const app=express();
app.use(express.json());

//PORTS
const PORT=process.env.PORT || 5000;

//Use cors to allow requests from diff url
app.use(cors())

//import Routes
const EventRoute=require('./routes/eventsRouter')


//connect to MongoDB
mongoose.connect(process.env.DB_CONNECT)
    .then(()=>console.log('DB Connected'))
    .catch(err=>console.log(err))

//Use the route;
app.use('/',EventRoute)
// CONNECT TO SERVER ON PORT GIVEN
app.listen(PORT,()=>console.log(`Server connected on PORT ${PORT}`))