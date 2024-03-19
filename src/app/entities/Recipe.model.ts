export class Recipe {
    
    recipeCode?: number
    name?: string
    categoryCode?:number
    preparationTimeInMinutes!:number
    difficultyLevel?:number
    dateAdded?:Date
    ingredients?:string[]
    preparationSteps?:string[]
    userCode?:number
    imageUrl?: string
}

