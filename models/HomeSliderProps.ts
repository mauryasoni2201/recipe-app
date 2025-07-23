export interface SliderRecipeImage{
    id: number;
    image: string;
    name: string;
}
export default interface HomeSliderProps{
    data:{
        recipes:Array<SliderRecipeImage>
   }
}