const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false

    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false

    },
    phoneNo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique:true

    },
    email:{
        type:Sequelize.STRING,
        allowNull:true,
        unique:true

    
    }

}
);

module.exports=User;
