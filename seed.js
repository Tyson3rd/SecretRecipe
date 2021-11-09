const path = require('path');
const fs = require('fs').promises;
const bcrypt = require('bcrypt');

const {sequelize} = require('./db');
const {User, Membership} = require('./models');




const createUsers = async () => {
    let pw1 = await bcrypt.hash('ty212', 2);
    let pw2 = await bcrypt.hash('ja275', 2);
    let pw3 = await bcrypt.hash('an649', 2);
    let pw4 = await bcrypt.hash('ch275', 2);
    let pw5 = await bcrypt.hash('sh515', 2);
    let pw6 = await bcrypt.hash('mu298', 2);
    let pw7 = await bcrypt.hash('st998', 2);

    const users = [
        {name : 'Tyson', password: pw1 },
        {name : 'James', password : pw2 },
        {name : 'Antony', password: pw3 },
        {name : 'Chad', password: pw4 },
        {name : 'Sharon', password: pw5 },
        {name : 'Mushfika', password: pw6 },
        {name : 'Stanley', password: pw7 },
    ];

    return users
}


const memberships = [
    {
        name : 'Platinum',
        price : 100.00
    },
    {
        name : 'Gold',
        price : 80.00
    },
    {
        name : 'Silver',
        price : 60.00
    }
];


const seed = async () => {

    await sequelize.sync({ force: true });

    const users = await createUsers(); // create users w/ encrypted passwords

    const userPromises = users.map(user => User.create(user))
    const membershipPromises = memberships.map(membership => Membership.create(membership))
    await Promise.all([...userPromises, ...membershipPromises]);
    console.log("db populated!")
}

seed();