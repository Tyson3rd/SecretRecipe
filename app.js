const express = require("express");
const basicAuth = require('express-basic-auth');
const bcrypt = require('bcrypt');
const {getAllUsers, addUser, getOneUser, deleteOneUser} = require('./controller/auth')

const { Recipe } = require('./models');

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

// I want to get all recipes

app.get('/recipes', async(req, res)=> {
  let recipes = await Recipe.findAll();
  res.json({recipes});
})

// I want to get one recipe

app.get('/recipes/:id', async(req, res)=> {
  let recipe = await Recipe.findByPk(req.params.id);
  res.json({recipe});
})

// I want to delete one recipe

app.delete('/recipes/:id', async(req, res)=> {
  await Recipe.destroy({where: {id: req.params.id}});
  res.send('Deleted!')
})

// I want to create one recipe

app.post('/recipes', async(req, res)=> {
  let newRecipe = await Recipe.create(req.body);
  res.json({newRecipe})
})

// I want to update one recipe

app.put('/recipes/:id', async(req, res)=> {
  let updatedRecipe = await Recipe.update(req.body, {
    where : {id : req.params.id}
  });
  res.json({updatedRecipe})
})

// app request that sends "Authorized!!!" only with the attached api-key
app.get('/auth-endpoint', (req, res) => {
  if(req.headers.authorization && regexp.headers.authorization == 'my-api-key-321') {
    res.send("Authorized!!!")
  } else {
    res.status(401).send();
  }
})
// 1st app listening on port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
})
// 2nd app requesr with a single get request in the route, listening on port 8080
const app2 = express();
// app2.use(bodyParser.json());
// app2.get("/", (req, res) => res.send("Bet You Didn't Think I Could Change Environments On Your A**!!! ;-D "))
// app2.listen(8080, () => {
//   console.log("Server running on port 8080");
// });

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////



// const express = require("express");
// const path = require('path'); //a node native module
// const {Restaurant, Item, Menu} = require('./models/index');

// const app = express();
// const port = 3000;

// //Q: What does express.static help us do?
// //A: access/serve the statis html and style folder.
// //Q: What do you think path.join helps us do?
// //A: this will join all strings into a single path.

// app.use(express.static(path.join(__dirname, 'public')))


// // Add this boilerplate middleware to successfully use req.body
// app.use(express.json())
// //will add routes
// //client > request url > url > http request > http response

// //will add routes
// app.get('/item', async (req, res) => {
//     const allItems = await Item.findAll();
//     res.json(allItems);
// })
// app.get('/flipcoin', async (req, res) => {
//     const coinflip = !Math.floor(Math.random() * 2) ? 'Heads' : 'Tails'
//     res.send(coinflip);
// })
// app.get('/item/:id', async (req, res) => {
//     const allItems = await Item.findByPk(req.params.id);
//     res.json(allItems);
// })
// app.get('/restaurant', async (req, res) => {
//     const item = await Restaurant.findAll();
//     res.json(item);
// });
// app.get('/restaurant/:id', async (req, res) => {
//     const item = await Restaurant.findByPk(req.params.id, {include:Menu});
//     res.json(item);
// });
// app.get('/menu', async (req, res) => {
//     const menu = await Menu.findAll();
//     res.json(menu);
// });
// app.get('/menu/:id', async (req, res) => {
//     const menu = await Menu.findByPk(req.params.id, {include:Item});
//     res.json(menu);
// });

// // app.get('/restaurant/:id', async (req, res) => {
// //     const item = await Restaurant.findByPk(req.params.id, {include:Menu });
// //     res.json(item);
// // });
// //Q: What will our server be doing?
// //A: start server listing on port:3000, and displays the clog message

// // Add new restaurant
// app.post('/restaurant', async (req, res) => {
// 	let newRestaurant = await Restaurant.create(req.body);
// 	res.send('Created!')
// })

// // Delete a restaurant

// app.delete('/restaurant/:id', async (req, res) => {
// 	await Restaurant.destroy({
// 		where : {id : req.params.id} // Destory a restaurant where this object matches
// 	})
// 	res.send("Deleted!!")
// })

// // Update a restaurant
// app.put("/restaurant/:id", async (req, res) => {
// 	let updated = await Restaurant.update(req.body, {
// 		where : {id : req.params.id} // Update a restaurant where the id matches, based on req.body
// 	})
// 	res.send("Updated!!")
// })
// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
// });