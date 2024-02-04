import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {SearchRecipesProps} from '../utils/app_types'
import {searchStyles} from "../theme/components/theme"

const RecipesSearch = ({ onSearch }: SearchRecipesProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={searchStyles.container}>
      <TextInput
        style={searchStyles.input}
        placeholder="Search recipes"
        value={searchText}
        onChangeText={setSearchText}
      />
      <TouchableOpacity style={searchStyles.button} onPress={handleSearch}>
        <FontAwesome name="search" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default RecipesSearch;
