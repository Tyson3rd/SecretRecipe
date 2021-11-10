const path = require('path');
const fs = require('fs').promises;
const bcrypt = require('bcrypt');

const {sequelize} = require('./db');
const {User, Recipe} = require('./models');

const createUsers = async () => {

    const users = [
        {name : 'Tyson', email:'tyson@gmail.com', password:'ty212' },
        {name : 'Stanley', email:'stanley@gmail.com', password :'ja275'},
        {name : 'Judy', email:'judy@gmail.com', password:'an649' },
        {name : 'Mr Krabs', email:'krabs@gmail.com', password: 'sh515'},
        {name : 'Spongebob', email:'spongebob@gmail.com', password: 'mu298'},
        {name : 'Squidward', email:'squidward@gmail.com', password: 'st998'}
    ];

    return users
}


const recipes = [
  {
    name: "Krabby Patty",
    ingredients: "Bun, 1 Patty, Sea Cheese, Sea Onions, Pickles, Ketchup, Mayo",
  },
  {
    name: "Double Krabby Patty",
    ingredients: "Bun, 2 Patties, 2 Sea Cheeses, Sea Onions, Pickles, Ketchup, Mayo",
  },
  {
    name: "Triple Krabby Patty",
    ingredients: "Bun, 3 Patties, 3 Sea Cheeses, Sea Onions, Pickles, Ketchup, Mayo",
  },
];


const seed = async () => {

    await sequelize.sync({ force: true });

    const users = await createUsers(); // create users w/ encrypted passwords

    const userPromises = users.map(user => User.create(user))
    const recipePromises = recipes.map(recipe => Recipe.create(recipe))
    await Promise.all([...userPromises, ...recipePromises]);
    console.log("db populated!")
}

seed();