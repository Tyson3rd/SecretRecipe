const path = require("path");
const fs = require("fs").promises;
const bcrypt = require("bcrypt");

const { sequelize } = require("./db");
const { User, Recipe } = require("./models");

const createUsers = async () => {
  const users = [
    { name: "Tyson", email: "tyson@gmail.com", password: "ty212" },
    { name: "Stanley", email: "stanley@gmail.com", password: "ja275" },
    { name: "Judy", email: "judy@gmail.com", password: "an649" },
    { name: "Mr Krabs", email: "krabs@gmail.com", password: "sh515" },
    { name: "Spongebob", email: "spongebob@gmail.com", password: "mu298" },
    { name: "Squidward", email: "squidward@gmail.com", password: "st998" },
  ];

  return users;
};

const recipes = [
  {
    name: "Krabby Patty",
    ingredients: "Bun, 1 Patty, Sea Cheese, Sea Onions, Pickles, Ketchup, Mayo",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80",
  },
  {
    name: "Double Krabby Patty",
    ingredients:
      "Bun, 2 Patties, 2 Sea Cheeses, Sea Onions, Pickles, Ketchup, Mayo",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1599&q=80",
  },
  {
    name: "Triple Krabby Patty",
    ingredients:
      "Bun, 3 Patties, 3 Sea Cheeses, Sea Onions, Pickles, Ketchup, Mayo",
    image:
      "https://images.unsplash.com/photo-1564362411991-472954b39f56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
  },
  {
    name: "Kelp Fries",
    ingredients: "Umami Seasoned Nori Kelp",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
  },
  {
    name: "Kelp Rings",
    ingredients: "Deep Fried Bull Kelp",
    image:
      "https://images.unsplash.com/photo-1630825533949-74f62f54553a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
  },
  {
    name: "Kelp Shake",
    ingredients: "Fresh Japanese Wakame Kelp",
    image:
      "https://images.unsplash.com/photo-1588673523898-687eaf18c036?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1090&q=80",
  },
  {
    name: "Coral Bits",
    ingredients: "100% Organic Staghorn Coral, Uni Mayo Drizzle",
    image:
      "https://images.unsplash.com/photo-1579065472192-c3f98f86b6c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
  },
  {
    name: "Salty Sea Dog",
    ingredients:
      "Shrimp Sausage, Diced Actinia Anemone, Red Sea Salt, Oyster Relish",
    image:
      "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "Sailor's Surprise",
    ingredients: "???",
    image:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
  },
];

const seed = async () => {
  await sequelize.sync({ force: true });

  const users = await createUsers(); // create users w/ encrypted passwords

  const userPromises = users.map((user) => User.create(user));
  const recipePromises = recipes.map((recipe) => Recipe.create(recipe));
  await Promise.all([...userPromises, ...recipePromises]);
  console.log("db populated!");
};

seed();
