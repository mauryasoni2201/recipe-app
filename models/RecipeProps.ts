export default interface RecipeCardProps {
  id: number;
  name: string;
  image: string;
  tags: string[];
}
export interface RecipeDetailProps extends RecipeCardProps{
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  rating: number;
  reviewCount: number;
  caloriesPerServing: number;
}