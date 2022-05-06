
const express = require('express');

const app = express();
const mongoose= require ('mongoose');
// const hbs = require ('hbs');
const dotenv = require('dotenv');
dotenv.config({path : './config.env'})
 app.use(express.json());
const DB = process.env.DATABASE;
app.use(require('./Router/auth'));

mongoose.connect(DB).then(()=>{
    console.log("conn seccessful");
}).catch((err)=>{
    console.log("no connection")
});

app.use(require('./Router/auth'));
const port = process.env.PORT || 3000;





app.listen(port,()=>{
    console.log("server is on")
  
})
