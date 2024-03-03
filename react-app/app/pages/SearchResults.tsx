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

type SearchResultsPageProps = {
  navigation: StackNavigationProp<RootStackParamList, "SearchResults">;
  route: {
    params: {
      results: Recipe[];
    };
  };
};

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({
  navigation,
  route,
}) => {
  const { results } = route.params;
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Pressable onPress={() => navigation.goBack()}>
          <FontAwesome
            name={"arrow-left"}
            size={16}
            color={"rgba(255, 255, 255, 0.8)"}
          />
        </Pressable>
      </SafeAreaView>
      {results.map((recipe: Recipe) => (
        <RecipeCard key={recipe.RecipeId} recipe={recipe} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.accent,
  },
});

export default SearchResultsPage;
