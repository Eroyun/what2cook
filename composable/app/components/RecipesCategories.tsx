import React, { useState } from "react";
import {
  View,
  Text
} from "react-native";
import {  categories} from "../utils/constants";
import { filterStyles } from "../theme/components/theme";
import { SelectList } from "react-native-dropdown-select-list";

const RecipesCategories: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("recipes_bageltoppers");
  console.log(selectedCategory)
  
  
  return (
    <View style={filterStyles.container}>
      <View style={filterStyles.filterSection}>
        
        <View>
          <Text>Categories</Text>
          <SelectList
            setSelected={(val) => setSelectedCategory(val)}
            fontFamily="lato"
            data={categories}
            search={false}
            boxStyles={{
              borderRadius: 0,
            }}
            defaultOption={{
              key: "1",
              value: "Jammu & Kashmir",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default RecipesCategories;
