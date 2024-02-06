import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SearchRecipesProps } from '../utils/app_types'
import { searchStyles } from "../theme/components/theme"
import { Input } from 'react-native-elements';

const RecipesSearch = ({ onSearch }: SearchRecipesProps) => {
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <View >
            <Input
                containerStyle={searchStyles.inputContainer}
                inputContainerStyle={searchStyles.input}
                placeholder="Search recipes"
                value={searchText}
                onChangeText={setSearchText}
                rightIcon={<TouchableOpacity onPress={handleSearch}>
                <FontAwesome style={searchStyles.searchIcon} name="search" size={16} color="black" />
            </TouchableOpacity>}
            />
            
        </View>
    );
};

export default RecipesSearch;
