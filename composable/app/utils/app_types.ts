import { ImageSourcePropType } from "react-native";
export interface SearchRecipesProps {
    onSearch: (searchText: string) => void;
}

export interface Ingredient {
    id: number;
    name: string;
    img: ImageSourcePropType;
  }
  
export  interface Time {
    id: number;
    name: string;
  }