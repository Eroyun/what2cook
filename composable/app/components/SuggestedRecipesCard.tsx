import React from "react";
import { View, Text, Image, StyleSheet, FlatList, ImageSourcePropType, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface Recipe {
    id: number;
    title: string;
    image: ImageSourcePropType;
    description: string;
    time: string;
    rating: number;
}
        
interface RecipeCardProps {
    recipe: Recipe;
}

const SuggestedRecipesCard: React.FC = () => {
    const recipes: Recipe[] = [
        {
          id: 1,
          title: "Pasta Carbonara",
          image: require("../../assets/test/test.jpg"),
          description: "A classic Italian pasta dish with eggs, cheese, and bacon.",
          time: "30 minutes",
          rating: 4.5,
        },
        {
          id: 2,
          title: "Chicken Stir-Fry",
          image: require("../../assets/test/test.jpg"),
          description: "A quick and easy stir-fry with chicken and vegetables.",
          time: "20 minutes",
          rating: 4.2,
        },
      ];
      
  const navigation = useNavigation()
  return (
    <View>
        <FlatList
            data={recipes}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => navigation.navigate("RecipeDetails")}
                    style={styles.item}>
                    <Image source={item.image} style={styles.image}/>
                    <Text>{item.title}</Text>
                    <View style={styles.moreInfo}>
                        <Text>{item.time}</Text>
                        <Text> | </Text>
                        <View style={styles.ratingInfo}>
                            <Text style={styles.rating}>{item.rating}</Text>
                            <FontAwesome name="star" size={16} color="yellow"/>
                        </View>
                    </View>
                </Pressable>
            )
            }
            columnWrapperStyle={{justifyContent: "space-between"}} numColumns={2}/>
    </View>
  );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "grey",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 7,
        borderRadius: 16,
        marginVertical: 16,
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 26
    },
    image: {
        width: 130,
        height: 130,
        resizeMode:"center"
    },
    moreInfo: {
        flexDirection:"row",
        marginTop: 8
    },
    ratingInfo: {
        flexDirection:"row"
    },
    rating: {
        marginRight: 4,

    }
});

export default SuggestedRecipesCard;
