import {ImageSourcePropType} from "react-native";
export interface SearchRecipesProps {
    onSearch : (searchText : string) => void;
}

export interface Ingredient {
    id : number;
    name : string;
    img : ImageSourcePropType;
}
export interface Calorie {
  id : number;
  value : string;
}
export interface Time {
    id : number;
    name : string;
}

export interface Recipe {
    id : number;
    title : string;
    image : ImageSourcePropType;
    description : string;
    time : string;
    rating : number;
}

export interface RecipeCardProps {
    recipe : Recipe;
}

export type RootStackParamList = {
  RecipeDetails: { recipe: Recipe };
  // Add other screen names and their corresponding parameters here
};