const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')
const bcrypt = require('bcrypt')


class User extends Model {}

class Membership extends Model {}

User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 3)
     .then(hash =>{
         user.password = hash;
     })
     .catch(err => {
         throw new Error
     });
});


Membership.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(5,2)
}, {
    sequelize,
    timestamps: false,
});



module.exports = {User, Membership};