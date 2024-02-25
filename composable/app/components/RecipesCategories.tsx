import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { categories } from "../utils/constants";
import { categoriesStyles } from "../theme/components/theme";
import Ionicons from "@expo/vector-icons/FontAwesome";

const RecipesCategories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("breakfast");

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
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
                  onPress={() => handleCategoryPress(category.key)}
                  style={[
                    categoriesStyles.icon,
                    selectedCategory === category.key && categoriesStyles.selectedIcon,
                  ]}
                >
                  <Image source={category.image} style={[
                    categoriesStyles.categoryImage,
                    selectedCategory === category.key && categoriesStyles.selectedCategoryImage,
                  ]} />
                </TouchableOpacity>
                <Text style={categoriesStyles.text}>
                  {category.value}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RecipesCategories;
