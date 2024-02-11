import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RecipesHomePage from "../pages/RecipesHomePage";
import RecipeDetailsPage from "../pages/RecipeDetailsPage";
import {registerRootComponent} from "expo";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Welcome" component={RecipesHomePage}/>
                <Stack.Screen name="RecipeDetails" component={RecipeDetailsPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default registerRootComponent(AppNavigator);
