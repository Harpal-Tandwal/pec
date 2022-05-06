const express = require('express');
const app = express();
const hbs = require ('hbs');
const { dirname } = require('path');
const path = require('path')
// const async = require('hbs/lib/async');
// const router = express.Router();
const Reading = require('../models/userSchema')
 console.log(__dirname)

const temp = path.join(__dirname,"/templates/views")
const partialsPath= path.join(__dirname,"/templates/partials")
app.set("view engine","hbs");
app.set('views',temp);
hbs.registerPartials(partialsPath);



// template engine route
app.get("/",(req,res)=>{
    res.render('index',{
        userName:" mohit ",
        temperature:35,
        moisture:98

    })
})


 

app.post('/register', async (req,res)=>{
   console.log(req.body);
   const {plant_name , temperature, humidity}= req.body;

try{ 
  
   const result = new Reading({temperature:temperature,humidity:humidity});
   console.log(result);
   const  result2 = await result.save();
   console.log(result2);
}catch(err){
    console.log(err);
 
}
res.send("data processing...")
});


app.get('/data', async (req,res)=>{
   try{
    const result = await Reading.find().select({temperature:1,humidity:1,moisture:1});
var [a]= result;
 console.log("data is :")
 console.log(a);
    console.log(a.temperature) ;
    console.log(a.humidity);
    console.log(a.moisture);
    // console.log(a.hook);
    // console.log(a.userId);
   
   
    res.render('index',{
        userName:" mohit ",
        temperature:a.temperature,
        moisture:a.moisture,
        humidity:a.humidity

    })
   }catch(err){
       console.log(err);
   }
    
})

module.exports = app;