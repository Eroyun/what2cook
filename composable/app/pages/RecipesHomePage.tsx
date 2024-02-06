import {SafeAreaView, View} from "react-native";
import React from "react";
import RecipesHomePageHeader from "../components/RecipesHomePageHeader"
import RecipesSearch from "../components/RecipesSearch";
import Filter from "../components/RecipesFilter";
import SuggestedRecipesCard from "../components/SuggestedRecipesCard";
import {colors} from "../utils/constants";
import {homepageStyles} from "../theme/components/theme";
import RecipesCategories from "../components/RecipesCategories";
const RecipesHomePage = () => {

    const handleSearch = (searchText : string) => {
        console.log("Searching for recipes with text:", searchText);
    };

    return (
        <SafeAreaView
            style={{
            flex: 1,
            backgroundColor: colors.background
        }}>
            <RecipesHomePageHeader headerText={"What would you like to cook?"}/>
            
            <View style={homepageStyles.container}>
                <RecipesSearch onSearch={handleSearch} />
                <Filter />
            </View>
            <RecipesCategories/>
            <SuggestedRecipesCard/>
        </SafeAreaView>
    )
}
export default RecipesHomePage;