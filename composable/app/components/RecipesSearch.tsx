import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, ViewStyle } from "react-native";
import { Search, MapPin, Sliders } from "react-feather";
import { COLORS } from "../utils/constants";
import { SearchRecipesProps } from '../utils/app_types'
import { Icon } from "react-native-elements";
const RecipesSearch = ({ onSearch }: SearchRecipesProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" style={styles.iconContainer} />
        <TextInput
          placeholder="Search recipes"
          style={styles.input}
          keyboardType="default"
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 2,
  } as ViewStyle,
  searchContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 1,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 7,
    elevation: 4,
  },
  input: {
    marginLeft: 40,
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  iconContainer: {
    padding: 5
  },
});

export default RecipesSearch;
