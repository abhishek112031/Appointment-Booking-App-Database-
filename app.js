const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');

const app=express();
const appo=require('./routers/appointment');
const sequelize=require('./util/database');

app.use(bodyParser.urlencoded({ extended: false }));


app.use(appo);

sequelize.sync()
.then((result)=>{
    // console.log(result);

    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
})



