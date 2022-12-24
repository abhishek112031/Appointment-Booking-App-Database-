const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const Appointment=sequelize.define('appointment',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    userName: Sequelize.STRING,

    phoneNo: {
        type: Sequelize.INTEGER,
        allowNull:false,
        // unique:false
    },
    emailId:{
        type:Sequelize.STRING,
        allowNull:false,
        // unique:false
    }
 
});

module.exports=Appointment;