const express=require('express');
const path=require('path');
const rootDir=require('../util/path');
const Appointment=require('../models/appointment');

exports.getBackend=(req,res,next)=>{
   Appointment.findAll()
   .then((appo)=>{
       res.json(appo);
   })
   .catch((err)=>console.log(err))

//
}

exports.getFrontpage=(req,res,next)=>{
   res.sendFile(path.join(rootDir,'views','mainPage.html'));
}

exports.postAppointment=(req,res,next)=>{
   const userName=req.body.userName;
   const emailId=req.body.emailId;
   const phoneNo=req.body.phoneNo;

   Appointment.create({
      userName:userName,
      emailId:emailId,
      phoneNo:phoneNo

   })
   .then(()=>{
      // console.log(result);
      res.redirect('/book-appointment')

   })
   .catch((err)=>{
      res.send(`<h4>User-name or Phone Number already Exist, Please try with another data</h4>`);
   });

}

exports.deleteById=(req,res,next)=>{
   const userId=req.params.Id;
   Appointment.findByPk(userId)
    .then((appo)=>{//step to delete single product
        appo.destroy(); 
    })
    .then(
        (allAfterDel)=>{ // step to fetch all-products after deletion 
            res.json(allAfterDel);
        }
    )
    .catch(err=>{
        console.log(err)
    });
}

exports.getById=(req,res,next)=>{
   const userId=req.params.Id;
   Appointment.findByPk(userId)
   .then((result)=>{
      res.json(result);
   })
   .catch(err=>{
      console.log(err)
   })
}