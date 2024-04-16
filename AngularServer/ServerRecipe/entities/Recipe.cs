namespace AngularServer
{
    public class Recipe
    {
        public int recipeCode { get; set; }
        public string name { get; set; }
        public int categoryCode { get; set; }
        public int preparationTimeInMinutes { get; set; }
        public int difficultyLevel { get; set; }
        public DateTime dateAdded { get; set; }
        public List<string> ingredients { get; set; }
        public List<string> preparationSteps { get; set; }
        public int userCode { get; set; }
        public string imageUrl { get; set; }
    }
}
