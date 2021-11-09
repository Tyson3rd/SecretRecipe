const path = require('path');
const fs = require('fs').promises;
const bcrypt = require('bcrypt');

const {sequelize} = require('./db');
const {User, Recipe} = require('./models');

const createUsers = async () => {

    const users = [
        {name : 'Tyson', password:'ty212' },
        {name : 'Stanley', password :'ja275'},
        {name : 'Judy', password:'an649' },
        {name : 'Mr Krabs', password: 'sh515'},
        {name : 'Spongebob', password: 'mu298'},
        {name : 'Squidward', password: 'st998'}
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