const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

mongoose.connect(
    "mongodb+srv://emilio:0722937438@cluster0.xdlrq.mongodb.net/myFirstDatabase",
    {useNewUrlParser: true, useUnifiedTopology: true}
  );
  
  const connection = mongoose.connection;
  
  connection.once("open", () => {
    console.log("MongoDb connected");
  });

app.get('/', (req, res) =>{
    res.send("the page is working");
});

const userRoute = require('./routes/user');
app.use('/user', userRoute);

app.listen(port, () =>{
    console.log("Server is running");
})