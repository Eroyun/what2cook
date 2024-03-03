import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Foundation";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../utils/constants";
import RecipeCard from "../components/RecipeCard";
import { Recipe } from "../utils/app_types";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../utils/app_types";

type ResultsPageProps = {
  navigation: StackNavigationProp<RootStackParamList, "ResultsPage">;
  route: {
    params: {
      results: Recipe[];
    };
  };
};

const ResultsPage: React.FC<ResultsPageProps> = ({ navigation, route }) => {
  const { results } = route.params;

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Pressable onPress={() => navigation.goBack()} style={styles.backContainer}>
          <FontAwesome
            name={"arrow-left"}
            size={20}
            color={"black"}
          />
        </Pressable>
      </SafeAreaView>

      <View style={styles.recipeContainer}>
        {results.length > 0 ? (
          <>
            <Text style={styles.resultsText}>
              {results.length} {results.length === 1 ? "recipe" : "recipes"} found
            </Text>
            {results.map((recipe: Recipe) => (
              <RecipeCard key={recipe.RecipeId} recipe={recipe}/>
            ))}
          </>
        ) : (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>No recipes found</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 15
  },
  recipeContainer: {
    backgroundColor: COLORS.white,
    padding: 20, // Adjust padding as needed
    borderRadius: 30, // Add borderRadius
  },
  backContainer: {
    paddingBottom: 10,
  },
  resultsText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  noResultsContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  noResultsText: {
    fontSize: 18,
    color: COLORS.gray,
  },
});

export default ResultsPage;
