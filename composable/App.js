import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipesHomePage from "./app/pages/RecipesHomePage";
import RecipeDetailsPage from "./app/pages/RecipeDetailsPage";
import FavouritePage from "./app/pages/FavouritePage"
import AccountPage from "./app/pages/AccountPage"
import { registerRootComponent } from "expo";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomePage" component={RecipesHomePage} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetailsPage} />
        <Stack.Screen name="Favourite" component={FavouritePage} />
        <Stack.Screen name="Account" component={AccountPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default registerRootComponent(AppNavigator);
