import Recipe from "./RecipeProps";

export interface SliderRecipeImage{
    id: number;
    image: string;
    name: string;
}

export default interface HomeSliderProps{
    data:{
        recipes:Array<SliderRecipeImage>;
        categories: Array<string>;
        underThirtyMinutesRecipes: Array<Recipe>;
        topRatedRecipes: Array<Recipe>;
   }
}