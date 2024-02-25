import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../utils/constants";
import Icon from "react-native-vector-icons/Foundation";
import { Recipe } from "../utils/app_types";

const SuggestedRecipesCard = ({ recipes }: { recipes: Recipe[] }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.titleText}>Popular recipes</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {recipes.map((recipe: Recipe) => (
          <Pressable
            key={recipe.RecipeId}
            onPress={() => navigation.navigate("RecipeDetails", { recipe })}
            style={styles.item}
          >
            <ImageBackground
              source={JSON.parse(recipe.Images)[0]}
              style={styles.image}
            >
              <View style={styles.moreInfo}>
                <Text style={styles.moreInfoText}>
                  <Icon name="clock" size={16} color="white" />
                </Text>
                <Text style={styles.time}>{recipe.TotalTime}</Text>
              </View>
              <View style={styles.ratingInfo}>
                <View style={styles.ratingCircle}>
                  <FontAwesome name="star" size={16} color="white" />
                  <Text style={styles.rating}>{recipe.AggregatedRating}</Text>
                </View>
              </View>
            </ImageBackground>
            <Text style={styles.itemTitle}>{recipe.Name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16, // Add horizontal padding to create space between items
    paddingBottom: 125, // Remove bottom padding to reduce space between title and bottom of container
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    marginLeft: 16,
  },
  item: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 16,
    marginVertical: 16,
    marginRight: 16, // Add right margin to create space between items
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 16,
    overflow: "hidden",
  },
  moreInfo: {
    position: "absolute",
    top: 8,
    left: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.main,
    borderRadius: 50,
    padding: 4,
    opacity: 0.8,
  },
  moreInfoText: {
    color: "white",
    fontSize: 16,
    marginRight: 4,
  },
  time: {
    color: "white",
    fontSize: 12,
  },
  ratingInfo: {
    position: "absolute",
    bottom: 8,
    right: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
  },
  ratingCircle: {
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginRight: 2,
  },
  rating: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 2,
  },
  itemTitle: {
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
  },
});

export default SuggestedRecipesCard;
