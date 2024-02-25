import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { categories } from "../utils/constants";
import { categoriesStyles } from "../theme/components/theme";

import Api from "../api/qdrant";
import { Recipe } from "../utils/app_types";

interface Category {
  key: string;
  value: string;
}

interface RecipesCategoriesProps {
  setCategoryData: (category: Recipe[]) => void;
}

const RecipesCategories = ({ setCategoryData }: RecipesCategoriesProps) => {
  const api = new Api();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    handleCategoryPress({ key: "breakfast", value: "Breakfast" });
  }, []);

  const handleCategoryPress = (category: Category) => {
    api
      .get("filter-category", { category: category.value })
      .then((response) => {
        if (response.data && response.data.length > 0) {
          console.log(response.data);
          setCategoryData(response.data);
        }
      });
    setSelectedCategory(category.key);
  };

  return (
    <View style={categoriesStyles.container}>
      <View style={categoriesStyles.filterCategories}>
        <View>
          <Text>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <View key={category.key} style={categoriesStyles.categoryItem}>
                <TouchableOpacity
                  onPress={() => handleCategoryPress(category)}
                  style={[
                    categoriesStyles.icon,
                    selectedCategory === category.key &&
                      categoriesStyles.selectedIcon,
                  ]}
                >
                  <Image
                    source={category.image}
                    style={[categoriesStyles.categoryImage]}
                  />
                </TouchableOpacity>
                <Text style={categoriesStyles.text}>{category.value}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RecipesCategories;
