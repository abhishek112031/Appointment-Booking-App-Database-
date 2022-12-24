const Sequelize= require("sequelize");

const sequelize=new Sequelize('appointment_booking','root','mysql@2022',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;