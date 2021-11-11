import React, { useState, useEffect } from "react";
import Recipes from "../component/Recipes";
import axios from "axios";

export default function Menu() {
  const [recipes, setRecipes] = useState([]);

  async function getRecipes() {
    try {
      const res = await fetch(`http://localhost:5000/recipes`);
      // console.log("what is RES here", res);
      const resJSON = await res.json();
      // console.log("what is RESJSON here", resJSON.recipes);
      setRecipes(resJSON.recipes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="menu-container">
      <h2 className="text-center">Galley Grub</h2>
      <h3 className="text-center">People Order Our Patties</h3>
      <Recipes recipes={recipes}></Recipes>
    </div>
  );
}
