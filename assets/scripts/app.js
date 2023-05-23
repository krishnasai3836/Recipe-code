const recipes = [ 
    { 
      name: "coffee", 
      ingredients: ["milk", "coffeepowder", "sugar"], 
    }, 
    { 
      name: "chicken curry", 
      ingredients: ["chicken", "salt", "onion", "garlic", "ginger", "tomato"], 
    }, 
    { 
      name: "cake", 
      ingredients: ["egg", "flour", "chocolate", "sugar"], 
    },
    { 
      name: "milkshake", 
      ingredients: ["banana", "milk", "ice", "sugar"], 
    },
    { 
      name: "dosabatter", 
      ingredients: ["rice", "uraddal", "bakingsoda"], 
    }, 
    { 
      name: "dosa", 
      ingredients: ["dosabatter", "salt", "oil"], 
    }
  ]; 
  
  const userIngredients = prompt("Enter ingredients(separate with commas): ").toLowerCase().split(",");

  for(let i=0;i<userIngredients.length;i++){
    userIngredients[i] = userIngredients[i].trim();
    userIngredients[i] = userIngredients[i].replace(" ","");

    if(userIngredients[i].endsWith('es'))
      userIngredients[i] = userIngredients[i].slice(0,-2);
    else if(userIngredients[i].endsWith('s'))
      userIngredients[i] = userIngredients[i].slice(0,-1);
  }

  console.log("User Ingredients : " + userIngredients);
  
  const matchingRecipes = []; 
  
  // recipes.forEach((recipe) => { 
  //   if (userIngredients.every((ingredient) => recipe.ingredients.includes(ingredient))) { 
  //     matchingRecipes.push(recipe.name); 
  //   } 
  // }); 
  
  for(const recipe of recipes) {
      let count=0,temp=0;
      const unmatched = [];
      for(let i in recipe.ingredients) {
          if(userIngredients.includes(recipe.ingredients[i]) || matchingRecipes.includes(recipe.ingredients[i]))
          {
              count++;
              if(count == recipe.ingredients.length)
                  matchingRecipes.push(recipe.name);
          }
          else {
            unmatched.push(recipe.ingredients[i]);
            temp++;
          }
      }
      if(temp>0 && temp<recipe.ingredients.length)
            console.log("\nRequired these more items to prepare "+recipe.name.toUpperCase()+": "+unmatched);
  }

  matchingRecipes.forEach(matchingRecipes => matchingRecipes = matchingRecipes.toUpperCase() );
  
  if (matchingRecipes.length > 0) { 
      console.log(`\nYOU CAN PREPARE: ${matchingRecipes} !!`); 
  } else { 
    console.log("\nSorry, You don't have enough ingredients."); 
  }
  
  
  //milk,coffee powder,sugar
  //rice,milk,urad dal,sugar,coffee powder,salt,oil,baking soda
  //eggs, flour, chocolate,sugar
  //dosabatter,salt,oil
  //bananas,Milk, Sugar,ICE