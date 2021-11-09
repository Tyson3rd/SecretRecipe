const {User} = require('../models');

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

  module.exports = {getAllUsers, addUser, getOneUser, deleteOneUser }