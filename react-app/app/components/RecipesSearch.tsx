import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { Icon } from "react-native-elements";
import { SearchRecipesProps } from '../utils/app_types'

const RecipesSearch = ({ onSearch }: SearchRecipesProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={handleSearch} style={styles.iconContainer}>
          <Icon name="search" size={24} color="#000" />
        </TouchableOpacity>
        <TextInput
          placeholder="Search recipes"
          style={styles.input}
          keyboardType="default"
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onSubmitEditing={handleSearch}
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
    paddingTop: 10
  } as ViewStyle,
  searchContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
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
    paddingVertical: 10,
  },
  iconContainer: {
    padding: 6
  },
});

export default RecipesSearch;
