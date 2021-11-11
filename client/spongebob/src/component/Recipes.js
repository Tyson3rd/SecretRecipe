import React from "react";

export default function Recipes({ recipes }) {
  return (
    <div className="recipe-container">
      {recipes.map((recipe, idx) => {
        return (
          <div
            key={idx}
            style={{
              justifyContent: "center",
              textAlign: "center",
              width: "18rem",
            }}
            className="card recipe-item"
          >
            <img
              src={recipe.image}
              className="card-img-top card-img"
              alt="burger"
            ></img>
            <div className="card-body">
              <p className="card-title">
                <strong>Name: </strong>
                {recipe.name}
              </p>
              <p className="card-text">
                <strong>Ingredients: </strong>
                {recipe.ingredients}
              </p>
            </div>
          </div>
          // <div
          // key={idx}
          // style={{ justifyContent: "center", textAlign: "center" }}
          // >
          //   <div className="card-body">
          // <p className="card-title">
          //   <strong>Name: </strong>
          //   {recipe.name}
          // </p>
          // <p className="card-text">
          //   <strong>Ingredients: </strong>
          //   {recipe.ingredients}
          // </p>
          //   </div>
          // </div>
        );
      })}
    </div>
  );
}
