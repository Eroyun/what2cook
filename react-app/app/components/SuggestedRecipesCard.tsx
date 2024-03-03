import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Recipe } from "../utils/app_types";
import RecipeCard from "./RecipeCard";

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
          <RecipeCard key={recipe.RecipeId} recipe={recipe} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 125,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    marginLeft: 16,
  },
});

export default SuggestedRecipesCard;
