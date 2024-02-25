import {SafeAreaView, View, TouchableOpacity, Image} from "react-native";
import React, { useEffect, useState } from "react";
import RecipesSearch from "../components/RecipesSearch";
import SuggestedRecipesCard from "../components/SuggestedRecipesCard";

import {homepageStyles} from "../theme/components/theme";
import RecipesCategories from "../components/RecipesCategories";
import Animated, {useAnimatedStyle} from 'react-native-reanimated'
import RecipesPageFooter from "../components/RecipesPageFooter";
import FilterModal from "../pages/FilterModel";

const RecipesHomePage = ({drawerAnimationStyle}) => {
    const handleSearch = (searchText : string) => {
        console.log("Searching for recipes with text:", searchText);
    };

    const [showFilterModal, setShowFilterModal] = useState(false)
   console.log(showFilterModal)

    return (
        <SafeAreaView
            style={{
            flex: 1,
            backgroundColor: "#fffff"
        }}>
            <Animated.View
                style={{
                flex: 1,
                ...drawerAnimationStyle
            }}>

                <View>

                    <View
                        style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 45,
                        paddingBottom: 2
                    }}>
                        <View
                            style={{
                            flexDirection: 'row',
                            flex: 1,
                            alignItems: 'center',
                            padding: 7
                        }}>
                            <RecipesSearch onSearch={handleSearch}/>
                            <TouchableOpacity
                                style={{
                                        paddingRight: 10
                                }}
                                onPress={()=> setShowFilterModal(true)}
                                >
                                    <Image
                                        source={require("../../assets/utils/filter.png")}
                                        style={{
                                        height: 20,
                                        width: 20,
                                        tintColor: 'black'

                                    }}/>
                                </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {showFilterModal && 
                <FilterModal
                    isVisible={showFilterModal}
                    onClose={() => setShowFilterModal(false)}
                />}
                <RecipesCategories/>
                <SuggestedRecipesCard/>
                <RecipesPageFooter/>
                
            </Animated.View>
        </SafeAreaView>
    )
}
export default RecipesHomePage;