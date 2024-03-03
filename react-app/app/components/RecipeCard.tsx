import React, {useState} from "react";
import {
  View,
  Text,
  Pressable,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../utils/constants";
import Icon from "react-native-vector-icons/Foundation";
import { Recipe } from "../utils/app_types";
import {homepageStylesRecipeCard} from "../theme/components/theme"

const RecipeCard = ({ recipe}: { recipe: Recipe }) => {
  const navigation = useNavigation();
  let imageUri = "";
  const parsedImages = JSON.parse(recipe.Images);
  if (Array.isArray(parsedImages) && parsedImages.length > 0) {
    imageUri = parsedImages[0];
  } else if (typeof parsedImages === "string") {
    console.log("dja")
    imageUri = parsedImages;
  }
  console.log(imageUri)
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  const renderStarRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name={i <= rating ? "star" : "star-o"}
          size={20}
          color={i <= rating ? "gold" : "black"}
        />
      );
    }
    return stars;
  };

  const getImageSource = ()=> {
    if (imageUri) {
      return { uri: imageUri }
    } else {
      return require("../../assets/utils/no-image-found.png")
    }
  }

  return (
    <View
            key={recipe.RecipeId}
            style={homepageStylesRecipeCard.item}
          >
            <Pressable onPress={toggleFavorite} style={homepageStylesRecipeCard.favoriteButton}>
              <FontAwesome name={isFavorite ? "heart" : "heart-o"} size={20} color={isFavorite ? "red" : "black"} />
            </Pressable>
            <View style={homepageStylesRecipeCard.imageContainer}>
              <Image
                source={getImageSource()}
                style={homepageStylesRecipeCard.image}
              />
            </View>
            <View style={homepageStylesRecipeCard.detailsContainer}>
              <Text style={homepageStylesRecipeCard.itemTitle}>{recipe.Name}</Text>
              {recipe.AggregatedRating && (
                <View style={homepageStylesRecipeCard.starRatingContainer}>
                  {renderStarRating(Math.round(recipe.AggregatedRating))}
                </View>
              )}
              <Pressable
                onPress={() => navigation.navigate("RecipeDetails", { recipe })}
                style={homepageStylesRecipeCard.detailsButton}
              >
                <Text style={homepageStylesRecipeCard.detailsButtonText}>See More Details</Text>
                <FontAwesome name="arrow-right" size={16} color={COLORS.main} />
              </Pressable>
            </View>
    </View>
  );
};


export default RecipeCard;
