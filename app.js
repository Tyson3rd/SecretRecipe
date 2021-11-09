const express = require("express");
const basicAuth = require('express-basic-auth');
const bcrypt = require('bcrypt');
const {getAllUsers, addUser, getOneUser, deleteOneUser, getAllRecipes, getOneRecipe, deleteOneRecipe, addOneRecipe, updateOneRecipe} = require('./controller/auth')

// const { Recipe } = require('./models');

// initialise Express
const app = express();

// specify out request bodies are json
app.use(express.json());

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//basic auth needs a config object
// app.use('/sensitive', basicAuth({
// app.use(basicAuth({
//   authorizer : dbAuthorizer, //custom authorizer fn
//   authorizeAsync: true, //allow our authorizer to be async
//   unauthorizedResponse : () => 'Did You Really Think It Would Be That Easy!!!?'
// }))

// //compares username + password with what's in the database
// // Returns boolean indicating if password matches
// async function dbAuthorizer(username, password, callback){
//   try {
//     // get user from DB
//     const user = await User.findOne({where : {name : username}})
//     // isValid == true if user exists and passwords match, false if no user or passwords don't match
//     let isValid = (user != null && user.name === "Tyson") ? await bcrypt.compare(password, user.password) : false;
//     callback(null, isValid); //callback expects null as first argument
//   } catch(err) {
//     console.log("OH NO AN ERROR!", err)
//     callback(null, false);
//   }
// }

////////////////////////////////////////////////////////
// const { regexp } = require("sequelize/types/lib/operators");
////////////////////////////////////////////////////////

app.get('/', (req, res,) => {
  res.send('If You Can See Me, Then I Am Working!!!')
})

// routes for crud users
app.get('/users', getAllUsers)

app.post('/users', addUser)

app.get('/users/:id', getOneUser)

app.delete('/users/:id', deleteOneUser)



//routes for recipes 
// I want to get all recipes
app.get('/recipes', getAllRecipes)

// I want to get one recipe

app.get('/recipes/:id', getOneRecipe)

// I want to delete one recipe

app.delete('/recipes/:id', deleteOneRecipe)

// I want to create one recipe

app.post('/recipes', addOneRecipe)

// I want to update one recipe

app.put('/recipes/:id', updateOneRecipe)

// // app request that sends "Authorized!!!" only with the attached api-key
// app.get('/auth-endpoint', (req, res) => {
//   if(req.headers.authorization && regexp.headers.authorization == 'my-api-key-321') {
//     res.send("Authorized!!!")
//   } else {
//     res.status(401).send();
//   }
// })
// 1st app listening on port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
})


