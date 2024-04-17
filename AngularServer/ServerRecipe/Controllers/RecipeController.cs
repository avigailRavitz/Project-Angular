using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        //static List<Recipe> Recipes = new List<Recipe>();


        static List<Recipe> Recipes = new List<Recipe>
        {
            new Recipe
            {
                recipeCode = 1,
                name = "Belgian Waffles",
                categoryCode = 2,
                preparationTimeInMinutes = 20,
                difficultyLevel = 2,
                dateAdded = DateTime.Now,
                ingredients = new List<string>
                {
                    "2 cups flour",
                    "1/4 cup sugar",
                    "1 teaspoon salt",
                    "2 eggs",
                    "3/4 cups milk",
                    "1/2 cup butter",
                    "1 cup sweet chocolate chips or chopped chocolate"
                },
                preparationSteps = new List<string>
                {
                    "Preheat Waffle Iron: Heat your waffle iron.",
                    "Mix Dry Ingredients: Combine flour, sugar and salt in a bowl.",
                    "Mix Wet Ingredients: Whisk egg, milk, butter.",
                    "Combine Wet and Dry: Mix wet ingredients.",
                    "Cook Waffles: Grease waffle iron, pour batter, and cook until golden and crispy.",
                    "Serve: Top with whipped cream, berries, or powdered sugar. Enjoy warm!"
                },
                userCode = 1,
                imageUrl = "../../../../assets/3.jpg"
            },
            new Recipe
            {
                recipeCode = 2,
                name = "Chocolate Cake",
                categoryCode = 2,
                preparationTimeInMinutes = 80,
                difficultyLevel = 3,
                dateAdded = DateTime.Now,
                ingredients = new List<string>
                {
                    "2 cups flour",
                    "1 cup sugar",
                    "1 1/2 teaspoons baking powder",
                    "1 1/2 teaspoons baking soda",
                    "1 teaspoon salt",
                    "2 large eggs",
                    "1 cup hot water",
                    "1/2 cup oil",
                    "1 cup sweet chocolate chips or chopped chocolate"
                },
                preparationSteps = new List<string>
                {
                    "Preheat Oven: Preheat your oven to 350°F (175°C)",
                    "Mix Dry Ingredients",
                    "Combine Wet and Dry",
                    "Bake",
                    "Cool: Allow the cakes to cool in the pans for 10 minutes"
                },
                userCode = 2,
                imageUrl = "../../../../assets/14.jpg"
            },
            new Recipe
            {
                recipeCode = 3,
                name = "Chocolate Mousse",
                categoryCode = 3, // Desserts
                preparationTimeInMinutes = 30,
                difficultyLevel = 2,
                dateAdded = DateTime.Now,
                ingredients = new List<string>
                {
                    "1 cup semi-sweet chocolate chips",
                    "2 cups heavy cream",
                    "1/4 cup granulated sugar",
                    "1 teaspoon vanilla extract"
                },
                preparationSteps = new List<string>
                {
                    "Melt Chocolate: Melt chocolate chips in a heatproof bowl over simmering water.",
                    "Whip Cream: In a separate bowl, whip heavy cream, sugar, and vanilla extract until stiff peaks form.",
                    "Combine: Gently fold melted chocolate into whipped cream until fully incorporated.",
                    "Chill: Refrigerate for at least 2 hours before serving."
                },
                userCode = 3,
                imageUrl = "../../../../assets/bin1.jpg"
            },
            new Recipe
            {
                recipeCode = 4,
                name = "Cherry Cake",
                categoryCode = 1, // Cakes
                preparationTimeInMinutes = 45,
                difficultyLevel = 2,
                dateAdded = DateTime.Now,
                ingredients = new List<string>
                {
                    "2 cups all-purpose flour",
                    "1 cup granulated sugar",
                    "1 teaspoon baking powder",
                    "1/2 teaspoon baking soda",
                    "1/2 teaspoon salt",
                    "1/2 cup unsalted butter, softened",
                    "1 cup buttermilk",
                    "2 large eggs",
                    "1 teaspoon vanilla extract",
                    "1 1/2 cups fresh or canned cherries, pitted and halved"
                },
                preparationSteps = new List<string>
                {
                    "Preheat Oven: Preheat oven to 350°F (175°C).",
                    "Prepare Pan: Grease and flour a 9-inch round cake pan.",
                    "Mix Ingredients: In a bowl, combine flour, sugar, baking powder, baking soda, and salt.",
                    "Beat Butter: In a separate bowl, beat butter until creamy.",
                    "Add Eggs and Vanilla: Beat in eggs and vanilla extract.",
                    "Combine Wet and Dry: Gradually add flour mixture and buttermilk to the butter mixture, alternating between dry and wet ingredients.",
                    "Fold in Cherries: Gently fold in cherries into the batter.",
                    "Bake: Pour batter into the prepared pan and bake for 35-40 minutes or until a toothpick inserted into the center comes out clean.",
                    "Cool: Allow the cake to cool in the pan for 10 minutes before transferring to a wire rack to cool completely."
                },
                userCode = 4,
                imageUrl = "../../../../assets/15.jpg"
            },
            new Recipe
            {
                recipeCode = 5,
                name = "Mousse Black and White",
                categoryCode = 3, // Desserts
                preparationTimeInMinutes = 25,
                difficultyLevel = 2,
                dateAdded = DateTime.Now,
                ingredients = new List<string>
                {
                    "6 ounces semi-sweet chocolate, chopped",
                    "6 ounces white chocolate, chopped",
                    "3 cups heavy cream, divided",
                    "1 teaspoon vanilla extract"
                },
                preparationSteps = new List<string>
                {
                    "Prepare Chocolate Mixtures: Melt semi-sweet chocolate with 1 1/2 cups heavy cream in a heatproof bowl over simmering water until smooth. Repeat with white chocolate and remaining heavy cream.",
                    "Whip Cream: In two separate bowls, whip each chocolate mixture with vanilla extract until soft peaks form.",
                    "Layer: Spoon alternating layers of chocolate mixtures into serving glasses or bowls.",
                    "Chill: Refrigerate for at least 1 hour before serving."
                },
                userCode = 5,
                imageUrl = "../../../../assets/bin4.jpg"
            },
            new Recipe
            {
                recipeCode = 6,
                name = "Alfajores Cake",
                categoryCode = 1, // Cakes
                preparationTimeInMinutes = 60,
                difficultyLevel = 3,
                dateAdded = DateTime.Now,
                ingredients = new List<string>
                {
                    "2 cups all-purpose flour",
                    "1 cup cornstarch",
                    "1 teaspoon baking powder",
                    "1/2 teaspoon baking soda",
                    "1/4 teaspoon salt",
                    "1 cup unsalted butter, softened",
                    "1 cup granulated sugar",
                    "3 large egg yolks",
                    "1 teaspoon vanilla extract",
                    "Dulce de leche, for filling",
                    "Powdered sugar, for dusting"
                },
                preparationSteps = new List<string>
                {
                    "Preheat Oven: Preheat oven to 350°F (175°C).",
                    "Prepare Pan: Grease and flour a 9-inch round cake pan.",
                    "Mix Dry Ingredients: In a bowl, sift together flour, cornstarch, baking powder, baking soda, and salt.",
                    "Cream Butter and Sugar: In another bowl, cream together butter and sugar until light and fluffy.",
                    "Add Egg Yolks and Vanilla: Beat in egg yolks and vanilla extract.",
                    "Combine Wet and Dry: Gradually add dry ingredients to the butter mixture, mixing until combined.",
                    "Form Layers: Divide dough into two portions. Roll out each portion and cut into circles.",
                    "Bake: Place dough circles on a baking sheet and bake for 10-12 minutes or until edges are golden.",
                    "Assemble Cake: Spread dulce de leche between baked dough circles to form a layered cake.",
                    "Dust with Powdered Sugar: Dust the top of the cake with powdered sugar before serving."
                },
                userCode = 6,
                imageUrl = "../../../../assets/image.png"
            },
            new Recipe
            {
                recipeCode = 7,
                name = "Lotus Cake",
                categoryCode = 1, // Cakes
                preparationTimeInMinutes = 45,
                difficultyLevel = 5,
                dateAdded = DateTime.Now,
                ingredients = new List<string>
                {
                    "2 cups all-purpose flour",
                    "1 cup granulated sugar",
                    "1 teaspoon baking powder",
                    "1/2 teaspoon baking soda",
                    "1/2 teaspoon salt",
                    "1/2 cup unsalted butter, softened",
                    "1 cup buttermilk",
                    "2 large eggs",
                    "1 teaspoon vanilla extract",
                    "1/2 cup Lotus Biscoff spread"
                },
                preparationSteps = new List<string>
                {
                    "Preheat Oven: Preheat oven to 350°F (175°C).",
                    "Prepare Pan: Grease and flour a 9-inch round cake pan.",
                    "Mix Ingredients: In a bowl, combine flour, sugar, baking powder, baking soda, and salt.",
                    "Beat Butter: In a separate bowl, beat butter until creamy.",
                    "Add Eggs and Vanilla: Beat in eggs and vanilla extract.",
                    "Combine Wet and Dry: Gradually add flour mixture and buttermilk to the butter mixture, alternating between dry and wet ingredients.",
                    "Fold in Lotus Biscoff Spread: Gently fold in Lotus Biscoff spread into the batter.",
                    "Bake: Pour batter into the prepared pan and bake for 35-40 minutes or until a toothpick inserted into the center comes out clean.",
                    "Cool: Allow the cake to cool in the pan for 10 minutes before transferring to a wire rack to cool completely."
                },
                userCode = 7,
                imageUrl = "../../../../assets/num4.webp"
            },
            new Recipe
            {
                recipeCode = 8,
                name = "Caramel Mousse",
                categoryCode = 3, // Desserts
                preparationTimeInMinutes = 30,
                difficultyLevel = 4,
                dateAdded = DateTime.Now,
                ingredients = new List<string>
                {
                    "1 cup caramel sauce",
                    "2 cups heavy cream",
                    "1/4 cup powdered sugar",
                    "1 teaspoon vanilla extract"
                },
                preparationSteps = new List<string>
                {
                    "Prepare Caramel Mixture: In a bowl, mix caramel sauce and vanilla extract until smooth.",
                    "Whip Cream: In another bowl, whip heavy cream and powdered sugar until stiff peaks form.",
                    "Combine: Gently fold caramel mixture into whipped cream until fully incorporated.",
                    "Chill: Refrigerate for at least 2 hours before serving."
                },
                userCode = 8,
                imageUrl = "../../../../assets/bin6.jpg"
            },
            new Recipe
            {
                recipeCode = 9,
                name = "Cornflakes with Chocolate",
                categoryCode = 2, // Cakes
                preparationTimeInMinutes = 15,
                difficultyLevel = 1,
                dateAdded = DateTime.Now,
                ingredients = new List<string>
                {
                    "4 cups cornflakes",
                    "1 cup chocolate chips",
                    "1/4 cup unsalted butter",
                    "1/4 cup honey"
                },
                preparationSteps = new List<string>
                {
                    "Melt Chocolate: In a microwave-safe bowl, melt chocolate chips and butter until smooth.",
                    "Mix: Stir in honey until well combined.",
                    "Combine: Add cornflakes to the chocolate mixture and toss gently to coat.",
                    "Shape: Drop spoonfuls of the mixture onto a parchment-lined baking sheet.",
                    "Chill: Refrigerate until set, then serve."
                },
                userCode = 9,
                imageUrl = "../../../../assets/bin8.jpg"
            },
              new Recipe
            {
                recipeCode = 10,
                name = "Kiss Cake",
                categoryCode = 1, // Cakes
                preparationTimeInMinutes = 40,
                difficultyLevel = 5,
                dateAdded = DateTime.Now,
                ingredients = new List<string>
                {
                    "2 cups all-purpose flour",
                    "1 cup granulated sugar",
                    "1 teaspoon baking powder",
                    "1/2 teaspoon baking soda",
                    "1/2 teaspoon salt",
                    "1/2 cup unsalted butter, softened",
                    "1 cup buttermilk",
                    "2 large eggs",
                    "1 teaspoon vanilla extract",
                    "1/2 cup chocolate kisses, unwrapped"
                },
                preparationSteps = new List<string>
                {
                    "Preheat Oven: Preheat oven to 350°F (175°C).",
                    "Prepare Pan: Grease and flour a 9-inch round cake pan.",
                    "Mix Ingredients: In a bowl, combine flour, sugar, baking powder, baking soda, and salt.",
                    "Beat Butter: In a separate bowl, beat butter until creamy.",
                    "Add Eggs and Vanilla: Beat in eggs and vanilla extract.",
                    "Combine Wet and Dry: Gradually add flour mixture and buttermilk to the butter mixture, alternating between dry and wet ingredients.",
                    "Fold in Chocolate Kisses: Gently fold in chocolate kisses into the batter.",
                    "Bake: Pour batter into the prepared pan and bake for 30-35 minutes or until a toothpick inserted into the center comes out clean.",
                    "Cool: Allow the cake to cool in the pan for 10 minutes before transferring to a wire rack to cool completely."
                },
                userCode = 10,
                imageUrl = "../../../../assets/num4.jpg"
            },
            new Recipe
            {
                recipeCode = 11,
                name = "Nougat Mousse",
                categoryCode = 3, // Desserts
                preparationTimeInMinutes = 45,
                difficultyLevel = 3,
                dateAdded = DateTime.Now,
                ingredients = new List<string>
                {
                    "1 cup Nutella or hazelnut spread",
                    "2 cups heavy cream",
                    "1/4 cup powdered sugar",
                    "1 teaspoon vanilla extract",
                    "1 cup mini marshmallows",
                    "1/4 cup chopped nuts (optional)"
                },
                preparationSteps = new List<string>
                {
                    "Prepare Nutella Mixture: In a bowl, mix Nutella and vanilla extract until smooth.",
                    "Whip Cream: In another bowl, whip heavy cream and powdered sugar until stiff peaks form.",
                    "Combine: Gently fold Nutella mixture, marshmallows, and chopped nuts into whipped cream until fully incorporated.",
                    "Chill: Refrigerate for at least 3 hours before serving."
                },
                userCode = 11,
                imageUrl = "../../../../assets/bin9.jpg"
            },
            new Recipe
            {
                recipeCode = 12,
                name = "Chocolate Pancake",
                categoryCode = 2, // Cakes
                preparationTimeInMinutes = 25,
                difficultyLevel = 2,
                dateAdded = DateTime.Now,
                ingredients = new List<string>
                {
                    "1 cup all-purpose flour",
                    "2 tablespoons cocoa powder",
                    "2 tablespoons granulated sugar",
                    "1 teaspoon baking powder",
                    "1/2 teaspoon baking soda",
                    "1/4 teaspoon salt",
                    "1 cup buttermilk",
                    "1 large egg",
                    "2 tablespoons unsalted butter, melted",
                    "1/2 cup chocolate chips"
                },
                preparationSteps = new List<string>
                {
                    "Mix Dry Ingredients: In a bowl, whisk together flour, cocoa powder, sugar, baking powder, baking soda, and salt.",
                    "Mix Wet Ingredients: In another bowl, whisk buttermilk, egg, and melted butter.",
                    "Combine: Gradually add wet ingredients to dry ingredients, mixing until just combined.",
                    "Cook Pancakes: Heat a non-stick skillet over medium heat. Pour 1/4 cup of batter per pancake onto the skillet.",
                    "Sprinkle Chocolate Chips: Sprinkle chocolate chips onto each pancake while cooking.",
                    "Flip: Cook until bubbles form on the surface, then flip and cook until set.",
                    "Serve: Serve warm with maple syrup or whipped cream."
                },
                userCode = 12,
                imageUrl = "../../../../assets/17.jpg"
            },
            new Recipe
            {
                recipeCode = 13,
                name = "Stacks of Chocolate",
                categoryCode = 3, // Desserts
                preparationTimeInMinutes = 20,
                difficultyLevel = 3,
                dateAdded = DateTime.Now,
                ingredients = new List<string>
                {
                    "2 cups chocolate cookies, crushed",
                    "1/4 cup unsalted butter, melted",
                    "1 cup cream cheese, softened",
                    "1/4 cup powdered sugar",
                    "1 teaspoon vanilla extract",
                    "1 cup heavy cream",
                    "1/2 cup chocolate shavings or cocoa powder, for garnish"
                },
                preparationSteps = new List<string>
                {
                    "Prepare Crust: In a bowl, combine crushed cookies and melted butter. Press into the bottom of serving glasses.",
                    "Make Filling: In another bowl, beat cream cheese, powdered sugar, and vanilla extract until smooth.",
                    "Whip Cream: In a separate bowl, whip heavy cream until stiff peaks form.",
                    "Combine: Gently fold whipped cream into cream cheese mixture until fully incorporated.",
                    "Assemble: Spoon alternating layers of cookie crust and filling into serving glasses.",
                    "Chill: Refrigerate for at least 1 hour before serving.",
                    "Garnish: Sprinkle chocolate shavings or cocoa powder on top before serving."
                },
                userCode = 13,
                imageUrl = "../../../../assets/bin12.jpg"
            },
             new Recipe
            {
                recipeCode = 14,
                name = "Flower Cake",
                categoryCode = 1, // Cakes
                preparationTimeInMinutes = 60,
                difficultyLevel = 3,
                dateAdded = DateTime.Now,
                ingredients = new List<string>
                {
                    "2 cups all-purpose flour",
                    "1 1/2 cups granulated sugar",
                    "1 teaspoon baking powder",
                    "1/2 teaspoon baking soda",
                    "1/2 teaspoon salt",
                    "3/4 cup unsalted butter, softened",
                    "3 large eggs",
                    "1 cup buttermilk",
                    "1 teaspoon vanilla extract",
                    "Food coloring (various colors)",
                    "Buttercream frosting"
                },
                preparationSteps = new List<string>
                {
                    "Preheat Oven: Preheat oven to 350°F (175°C).",
                    "Prepare Pan: Grease and flour a round cake pan.",
                    "Mix Dry Ingredients: In a bowl, sift together flour, baking powder, baking soda, and salt.",
                    "Cream Butter and Sugar: In another bowl, cream together butter and sugar until light and fluffy.",
                    "Add Eggs and Vanilla: Beat in eggs one at a time, then add vanilla extract.",
                    "Combine Wet and Dry: Gradually add flour mixture and buttermilk to the butter mixture, alternating between dry and wet ingredients.",
                    "Color Batter: Divide batter into separate bowls and color each portion with different food coloring.",
                    "Create Flower Design: Pour colored batter into the cake pan in layers or patterns to create a flower-like design.",
                    "Bake: Bake for 30-35 minutes or until a toothpick inserted into the center comes out clean.",
                    "Decorate: Allow the cake to cool completely, then frost with buttercream and decorate as desired."
                },
                userCode = 1,
                imageUrl = "../../../../assets/num2.jpg"
            },
            new Recipe
            {
                recipeCode = 15,
                name = "Lotus and Coconut Cake",
                categoryCode = 1, // Cakes
                preparationTimeInMinutes = 45,
                difficultyLevel = 2,
                dateAdded = DateTime.Now,
                ingredients = new List<string>
                {
                    "2 cups all-purpose flour",
                    "1 cup granulated sugar",
                    "1 teaspoon baking powder",
                    "1/2 teaspoon baking soda",
                    "1/2 teaspoon salt",
                    "1/2 cup unsalted butter, softened",
                    "1 cup buttermilk",
                    "2 large eggs",
                    "1 teaspoon vanilla extract",
                    "1/2 cup Lotus Biscoff spread"
                },
                preparationSteps = new List<string>
                {
                    "Preheat Oven: Preheat oven to 350°F (175°C).",
                    "Prepare Pan: Grease and flour a 9-inch round cake pan.",
                    "Mix Ingredients: In a bowl, combine flour, sugar, baking powder, baking soda, and salt.",
                    "Beat Butter: In a separate bowl, beat butter until creamy.",
                    "Add Eggs and Vanilla: Beat in eggs and vanilla extract.",
                    "Combine Wet and Dry: Gradually add flour mixture and buttermilk to the butter mixture, alternating between dry and wet ingredients.",
                    "Fold in Lotus Biscoff Spread: Gently fold in Lotus Biscoff spread into the batter.",
                    "Bake: Pour batter into the prepared pan and bake for 35-40 minutes or until a toothpick inserted into the center comes out clean.",
                    "Cool: Allow the cake to cool in the pan for 10 minutes before transferring to a wire rack to cool completely."
                },
                userCode = 2,
                imageUrl = "../../../../assets/num5.jpg"
            },
            new Recipe
            {
                recipeCode = 16,
                name = "Coconut Balls",
                categoryCode = 3, // Desserts
                preparationTimeInMinutes = 30,
                difficultyLevel = 4,
                dateAdded = DateTime.Now,
                ingredients = new List<string>
                {
                    "2 cups shredded coconut",
                    "1 cup sweetened condensed milk",
                    "1/2 teaspoon vanilla extract",
                    "1/2 cup chocolate chips"
                },
                preparationSteps = new List<string>
                {
                    "Mix Ingredients: In a bowl, combine shredded coconut, sweetened condensed milk, and vanilla extract.",
                    "Form Balls: Roll the mixture into small balls using your hands.",
                    "Chill: Place the coconut balls on a baking sheet lined with parchment paper and refrigerate until firm, about 15-20 minutes.",
                    "Dip in Chocolate: Melt chocolate chips in a microwave-safe bowl. Dip each coconut ball into the melted chocolate, coating evenly.",
                    "Chill Again: Place the chocolate-coated coconut balls back on the baking sheet and refrigerate until the chocolate sets.",
                    "Serve: Enjoy these delicious coconut balls as a sweet treat!"
                },
                userCode = 3,
                imageUrl = "../../../../assets/num20.jpg"
            }
        };

        // GET: api/<RecipeController>
        [HttpGet]
        public IEnumerable<Recipe> Get()
        {
            return Recipes;
        }

        // GET api/<RecipeController>/5
        [HttpGet("{id}")]
        public ActionResult<Recipe> Get(int id)
        {
            var recipe = Recipes.Find(r => r.recipeCode == id);
            if (recipe == null)
            {
                return NotFound();
            }
            return Ok(recipe);
        }

        // POST api/<RecipeController>
        [HttpPost]
        public ActionResult<Recipe> Post([FromBody] Recipe recipe)
        {
            if (recipe == null)
            {
                return BadRequest();
            }
            recipe.recipeCode = Recipes[Recipes.Count() - 1].recipeCode + 1;
            Recipes.Add(recipe);
            return CreatedAtAction(nameof(Get), new { id = recipe.recipeCode }, recipe);
        }

        // PUT api/<RecipeController>/5
        [HttpPut("{id}")]
        public ActionResult<Recipe> Put(int id, [FromBody] Recipe updatedRecipe)
        {
            var recipe = Recipes.Find(r => r.recipeCode == id);
            if (recipe == null)
            {
                return NotFound();
            }
            Recipes[Recipes.IndexOf(recipe)] = updatedRecipe;
            return Ok(recipe);
        }

        // DELETE api/<RecipeController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var recipeToDelete = Recipes.Find(r => r.recipeCode == id);
            if (recipeToDelete == null)
            {
                return NotFound();
            }

            Recipes.Remove(recipeToDelete);
            return NoContent();
        }


    }
}
