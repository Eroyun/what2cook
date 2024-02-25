import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { categories } from "../utils/constants";
import { categoriesStyles } from "../theme/components/theme";
import Ionicons from "@expo/vector-icons/FontAwesome";
import Api from "../api/qdrant";

const RecipesCategories: React.FC = () => {
  const api = new Api();
  const [selectedCategory, setSelectedCategory] = useState("breakfast");

  const handleCategoryPress = (category: any) => {
    console.log(category.value);
    api
      .get("filter-category", { category: category.value })
      .then((response) => {
        console.log(response.data);
      });
    setSelectedCategory(category.key);
  };

  return (
    <View style={categoriesStyles.container}>
      <View style={categoriesStyles.filterCategories}>
        <View>
          <Text>Categories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={categoriesStyles.scrollViewContent}
          >
            {categories.map((category) => (
              // Assign the key prop to the outer View element
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
                    style={[
                      categoriesStyles.categoryImage,
                      selectedCategory === category.key &&
                        categoriesStyles.selectedCategoryImage,
                    ]}
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
