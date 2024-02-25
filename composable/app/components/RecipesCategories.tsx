import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { categories } from "../utils/constants";
import { categoriesStyles } from "../theme/components/theme";

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
