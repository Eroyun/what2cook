import { SafeAreaView, View } from "react-native";
import React, { useEffect, useState } from "react";
import RecipesSearch from "../components/RecipesSearch";
import Filter from "../components/RecipesFilter";
import SuggestedRecipesCard from "../components/SuggestedRecipesCard";

import { homepageStyles } from "../theme/components/theme";
import RecipesCategories from "../components/RecipesCategories";
import Animated from "react-native-reanimated";
import RecipesPageFooter from "../components/RecipesPageFooter";
import Api from "../api/qdrant";
import { Recipe } from "../utils/app_types";

const RecipesHomePage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const setCategoryData = (categoryData: Recipe[]) => {
    setRecipes([...categoryData]);
  };

  const api = new Api();

  const handleSearch = (searchText: string) => {
    const body = {
      query: searchText,
    };
    api
      .post("search", body)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fffff",
      }}
    >
      <Animated.View
        style={{
          flex: 1,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 8,
              paddingBottom: 2,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                alignItems: "center",
                padding: 7,
              }}
            >
              {/* <Filter /> */}
              <RecipesSearch onSearch={handleSearch} />
            </View>
          </View>
        </View>
        <RecipesCategories setCategoryData={setCategoryData} />
        {recipes && recipes.length > 0 && (
          <SuggestedRecipesCard recipes={recipes} />
        )}
        <RecipesPageFooter />
      </Animated.View>
    </SafeAreaView>
  );
};
export default RecipesHomePage;
