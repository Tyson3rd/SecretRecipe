const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')


class User extends Model {}

class Membership extends Model {}

User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});


Membership.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(5,2)
}, {
    sequelize,
    timestamps: false,
});

module.exports = {User, Membership};