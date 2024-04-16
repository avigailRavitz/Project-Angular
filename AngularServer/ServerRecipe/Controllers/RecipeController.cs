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
    new Recipe { recipeCode = 1, name = "Spaghetti Aglio e Olio", categoryCode = 1, preparationTimeInMinutes = 20, difficultyLevel = 2, dateAdded = DateTime.Now, ingredients = new List<string> { "spaghetti", "garlic", "olive oil", "red pepper flakes" }, preparationSteps = new List<string> { "Cook spaghetti al dente", "Saute garlic in olive oil", "Mix spaghetti with garlic and red pepper flakes", "Serve hot" }, userCode = 1, imageUrl = "../../../../assets/צילום-מתוקים-מלמעלה-הדגשת-צבע.jpg" },
    new Recipe { recipeCode = 2, name = "Caprese Salad", categoryCode = 2, preparationTimeInMinutes = 10, difficultyLevel = 1, dateAdded = DateTime.Now, ingredients = new List<string> { "tomatoes", "mozzarella cheese", "fresh basil", "balsamic glaze" }, preparationSteps = new List<string> { "Slice tomatoes and cheese", "Arrange on a plate with basil leaves", "Drizzle with balsamic glaze", "Season with salt and pepper" }, userCode = 2, imageUrl =  "../../../../assets/1.jpg" },
    new Recipe { recipeCode = 3, name = "Banana Bread", categoryCode = 3, preparationTimeInMinutes = 60, difficultyLevel = 3, dateAdded = DateTime.Now, ingredients = new List<string> { "bananas", "flour", "sugar", "butter" }, preparationSteps = new List<string> { "Mash bananas", "Mix with dry ingredients", "Bake in oven", "Enjoy warm or cold" }, userCode = 3, imageUrl =  "../../../../assets/6.jpg"  } };

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
