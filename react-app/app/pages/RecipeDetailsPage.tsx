import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Foundation";
import React from "react";
import { COLORS } from "../utils/constants";
import { FontAwesome } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Recipe } from "../utils/app_types";

type RecipeDetailsPageProps = {
  navigation: StackNavigationProp<RootStackParamList, "RecipeDetails">;
  route: {
    params: {
      recipe: Recipe;
    };
  };
};

const RecipeDetailsPage: React.FC<RecipeDetailsPageProps> = ({
  navigation,
  route,
}) => {
  const { recipe } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={JSON.parse(recipe.Images)[0]}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView>
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesome
              name={"arrow-left"}
              size={16}
              color={"rgba(255, 255, 255, 0.8)"}
            />
          </Pressable>
        </SafeAreaView>

        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text
            style={{
              marginTop: 30,
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            {recipe.Name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginVertical: 16,
            }}
          >
            {recipe.Description}
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                backgroundColor: COLORS.accent,
                paddingHorizontal: 16,
                paddingVertical: 16,
                borderRadius: 8,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                <Icon name="clock" size={30} color="#900" />
              </Text>
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                {recipe.TotalTime}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: COLORS.accent,
                paddingHorizontal: 16,
                paddingVertical: 16,
                borderRadius: 8,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                Time Icon
              </Text>
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                {recipe.TotalTime}
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.accent,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flexGrow: 1,
    marginTop: 240,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Add a translucent background to the content
  },
});

export default RecipeDetailsPage;
