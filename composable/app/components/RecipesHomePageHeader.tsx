import {Text, View} from "react-native";
import React from "react";
import {headerStyles} from "../theme/components/theme";

const RecipesHomePageHeader = ({headerText} : {
    headerText: string
}) => {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.headerText}>{headerText}</Text>
        </View>
    )
}

export default RecipesHomePageHeader;
