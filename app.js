const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const sequelize=require('./util/database');
const app=express();
const User=require('./models/user');
const rootDir=require('./util/path');
const cors=require('cors');

app.use(bodyParser.json({extended:false}));



app.use(cors());
app.get('/Appointment-Booking',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','form.html'));
})

app.get('/get-all-users',async (req,res,next)=>{

    try{
        const response= await User.findAll();
        res.status(200).json(response);
    }
    catch(err){
        res.status(500).json(err);
    }
    
})

app.post('/add-user', async (req,res,next)=>{
    // console.log(req);
    try{
       
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const phoneNo=req.body.phoneNo;
    const email=req.body.email;


    const data= await User.create({
        firstName:firstName,
        lastName:lastName,
        phoneNo:phoneNo,
        email:email

    })

    res.status(201).json(data);

    }
    catch(err){
        res.status(500).json({error:err})

    }
    
   


});

app.delete('/delete-user/:Id', (req,res,next)=>{
    
        const userId=req.params.Id;
        
         User.findByPk(userId)
        .then((response)=>{
            response.destroy();
        }).then((rest)=>{
            res.json(rest)
        }).catch(err=>{
            res.status(err);
        })
        
        
 
})
app.get('/get-all-users/:Id',(req,res,next)=>{
    const eachUser=req.params.Id;
    User.findByPk(eachUser)
    .then((user)=>{
        res.json(user);
    })
   .catch((err)=>{
    res.status(500).json(err);
   })
})

app.use((req,res,next)=>{
    res.status(404).send(`<h3>page not found</h3> <a href="http://localhost:4000/Appointment-Booking">Go back</a>`)
})

sequelize.sync()
.then((result)=>{
    // console.log(result);

    app.listen(4000,()=>{
        console.log('app is running on http://localhost:4000')
    });
    
})
.catch((err)=>{
    console.log(err);
})
