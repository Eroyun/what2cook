import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { categories } from "../utils/constants";
import { categoriesStyles } from "../theme/components/theme";
import  Ionicons  from "@expo/vector-icons/FontAwesome";

const RecipesCategories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("breakfast");
  const [selectedArrow, setSelectedArrow] = useState(false);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    setSelectedArrow(false); // Add this line
  };

  return (
    <View style={categoriesStyles.container}>
      <View style={categoriesStyles.filterCategories}>
        <View>
          <Text>Categories</Text>
          <View style={
                    categoriesStyles.iconContainer}>
            {categories.map((category) => (
              <View
                key={category.key}
                style={[
                  categoriesStyles.icon,
                  selectedCategory === category.key && categoriesStyles.selectedIcon,
                ]}
              >
                <Image source={category.image} style={categoriesStyles.categoryImage} />
                <Text style={[
                    categoriesStyles.text,
                    selectedCategory === category.key && categoriesStyles.selectedText,
              
                   ]}>{category.value}</Text>
                <TouchableOpacity
                  onPress={() => handleCategoryPress(category.key)}
                  style={[
                    categoriesStyles.arrowContainer,
                    selectedCategory === category.key && categoriesStyles.selectedArrowContainer,
              
                   ]}
                >
                  <Ionicons name="arrow-right" style={[
                  categoriesStyles.arrowImage,
                  selectedCategory === category.key && categoriesStyles.selectedArrow,
                ]} />
               </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecipesCategories;