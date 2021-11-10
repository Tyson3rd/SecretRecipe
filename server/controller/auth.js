const {User, Recipe} = require('../models');

  const getAllUsers = async (req, res) => {
    //what should i put here?
    let users = await User.findAll(req.body)
    res.json({users});
  }
  

   const addUser = async (req, res) => {
    //what should i put here?
    let users = await User.create(req.body)
    res.json({users});
  }

  const getOneUser = async (req, res) => {
    let user = await User.findByPk(req.params.id);
    res.json({user});
  }

   const deleteOneUser = async(req, res)=> {
    await User.destroy({where: {id: req.params.id}});
    res.send('Deleted!')
  }

  const getAllRecipes = async(req, res)=> {
    let recipes = await Recipe.findAll();
    res.json({recipes});
  }

  const getOneRecipe = async(req, res)=> {
    let recipe = await Recipe.findByPk(req.params.id);
    res.json({recipe});
  }

  const deleteOneRecipe = async(req, res)=> {
    await Recipe.destroy({where: {id: req.params.id}});
    res.send('Deleted!')
  }

  const addOneRecipe = async(req, res)=> {
    let newRecipe = await Recipe.create(req.body);
    res.json({newRecipe})
  }

  const updateOneRecipe = async(req, res)=> {
    let updatedRecipe = await Recipe.update(req.body, {
      where : {id : req.params.id}
    });
    res.json({updatedRecipe})
  }

  module.exports = {getAllUsers, addUser, getOneUser, deleteOneUser, getAllRecipes, getOneRecipe, deleteOneRecipe, addOneRecipe, updateOneRecipe }