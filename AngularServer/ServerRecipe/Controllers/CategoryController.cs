using AngularServer;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ServerRecipe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        static List<Category> CategoryList = new List<Category>
        {
            new Category{id=1,name="Cakes",routingIcon="../../../../assets/num1.jpg"},
            new Category{id=2,name="Chocolates",routingIcon="../../../../assets/10.jpg"},
            new Category{id=3,name="Desserts",routingIcon="../../../../assets/bin1.jpg"}
        };
        // GET: api/<CategoryController>
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return CategoryList;
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public ActionResult<Category> Get(int id)
        {
            var category = CategoryList.Find(r => r.id == id);
            if (category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }

        // POST api/<CategoryController>
        [HttpPost]
        public ActionResult<Category> Post([FromBody] Category category)
        {
            if (category == null)
            {
                return BadRequest();
            }

            CategoryList.Add(category);
            return CreatedAtAction(nameof(Get), new { id = category.id }, category);
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public ActionResult<Category> Put(int id, [FromBody] Category updatedCategory)
        {
            var recipe = CategoryList.Find(r => r.id == id);
            if (recipe == null)
            {
                return NotFound();
            }
            CategoryList[CategoryList.IndexOf(recipe)] = updatedCategory;
            return Ok(recipe);
        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var recipeToDelete = CategoryList.Find(r => r.id == id);
            if (recipeToDelete == null)
            {
                return NotFound();
            }

            CategoryList.Remove(recipeToDelete);
            return NoContent();
        }


    }
}
