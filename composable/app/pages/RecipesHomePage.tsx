import {SafeAreaView, View} from "react-native";
import React from "react";
import RecipesSearch from "../components/RecipesSearch";
import Filter from "../components/RecipesFilter";
import SuggestedRecipesCard from "../components/SuggestedRecipesCard";
import {colors} from "../utils/constants";
import {homepageStyles} from "../theme/components/theme";
import RecipesCategories from "../components/RecipesCategories";
import RecipesHomePageHeader from "../components/RecipesHomePageHeader"
const RecipesHomePage = () => {

    const handleSearch = (searchText : string) => {
        console.log("Searching for recipes with text:", searchText);
    };

    return (
        <SafeAreaView
            style={{
                flex:1,
            backgroundColor: "#fffff"
        }}>
            <View>
            <RecipesHomePageHeader headerText={"What2Cook"}/>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 8, paddingBottom: 2 }}>
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', padding: 7}}>
                {/* <Filter /> */}
                <RecipesSearch onSearch={handleSearch} />
            </View></View>
            </View>
            <RecipesCategories/>
            <SuggestedRecipesCard/>
        </SafeAreaView>
    )
}
export default RecipesHomePage;