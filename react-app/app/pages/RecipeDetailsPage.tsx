import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  SafeAreaView,
  Pressable,
  ScrollView,
  FlatList,
  Image
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { COLORS } from '../utils/constants';
import { RootStackParamList, Recipe } from '../utils/app_types';

type RecipeDetailsPageProps = {
  navigation: StackNavigationProp<RootStackParamList, 'RecipeDetails'>;
  route: {
    params: {
      recipe: Recipe;
    };
  };
};

const RecipeDetailsPage: React.FC<RecipeDetailsPageProps> = ({ navigation, route }) => {
  const { recipe } = route.params;
  const ingredients = recipe.RecipeIngredientParts
    ? JSON.parse(recipe.RecipeIngredientParts)
    : [];
  const quantities = recipe.RecipeIngredientQuantities
    ? JSON.parse(recipe.RecipeIngredientQuantities.replace(/NA/g, '""'))
    : [];
  const ingredientList = ingredients.map((ingredient, index) => ({
    name: ingredient,
    quantity: quantities[index] !== 'NA' ? quantities[index] : '',
  }));
  const recipeInstructions = recipe.RecipeInstructions
    ? JSON.parse(recipe.RecipeInstructions)
    : [];
    const imageScale = React.useRef(new Animated.Value(0)).current;
    const imageTranslateY = React.useRef(new Animated.Value(-100)).current; // Start above the screen
    const imageTranslateX = React.useRef(new Animated.Value(-100)).current; // Start to the left of the screen
  

    React.useEffect(() => {
      Animated.sequence([
        // Move to starting position (top left of the screen)
        Animated.parallel([
          Animated.timing(imageTranslateX, {
            toValue: -50, // Move a bit to the left for the first jump
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(imageTranslateY, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
        // First jump
        Animated.parallel([
          Animated.timing(imageTranslateX, {
            toValue: -25, // Move a bit more to the left
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(imageTranslateY, {
            toValue: -100, // Increase the jump distance
            duration: 300,
            useNativeDriver: true,
          }),
        ]),
        // Drop down
        Animated.timing(imageTranslateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        // Second jump, now in the middle
        Animated.parallel([
          Animated.timing(imageTranslateX, {
            toValue: 0, // Move to the middle
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(imageTranslateY, {
            toValue: -50, // Increase the jump distance
            duration: 300,
            useNativeDriver: true,
          }),
        ]),
        // Settle into position
        Animated.timing(imageTranslateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }, []);


  const renderIngredientItem = ({ item }) => (
    <View style={styles.ingredientItem}>
      <Text style={styles.ingredientName}>{item.name}</Text>
      <Text style={styles.ingredientQuantity}>{item.quantity}</Text>
    </View>
  );

  const renderHeader = () => (
    <View>
      <Text style={styles.recipeDescription}>{recipe.Description}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image style={styles.icon} source={require('../../assets/utils/ingredient.png')} />
        <Text>INGREDIENTS</Text>
      </View>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.instructionsContainer}>
      {recipeInstructions.map((instruction, index) => (
        <Text key={index} style={styles.instructionText}>
          {instruction}
        </Text>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backContainer}>
        <FontAwesome name="arrow-left" size={20} color="black" />
      </Pressable>
      <View style={styles.infoContainer}>
        <Text style={styles.recipeName}>{recipe.Name}</Text>
        <View style={styles.recipeDetails}>
          <View style={styles.recipeTimeCalories}>
            <Image style={styles.icon} source={require('../../assets/utils/clock.png')} />
            <Text style={styles.recipeTimeCaloriesText}>{recipe?.TotalTime} MINS</Text>
          </View>
          <View style={styles.recipeTimeCalories}>
            <Image style={styles.icon} source={require('../../assets/utils/fire.png')} />
            <Text style={styles.recipeTimeCaloriesText}>{recipe?.Calories} CALORIES</Text>
          </View>
        </View>
        <Animated.Image
          source={{ uri: JSON.parse(recipe?.Images)[0] }}
          style={[
            styles.backgroundImage,
            {
              transform: [
                { translateX: imageTranslateX },
                { translateY: imageTranslateY },
              ],
            },
          ]}
          resizeMode="cover"
        />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <FlatList
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          data={ingredientList}
          renderItem={renderIngredientItem}
          keyExtractor={(_, index) => index.toString()}
          style={styles.ingredientsList}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  backgroundImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 30,
  },
  contentContainer: {
    flexGrow: 1,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },
  infoContainer: {
    paddingHorizontal: 35,
  },
  backContainer: {
    paddingHorizontal: 15,
  },
  recipeName: {
    marginTop: 30,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  recipeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  recipeTimeCalories: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recipeTimeCaloriesText: {
    paddingLeft: 4,
  },
  icon: {
    width: 20,
    height: 20,
  },
  ingredientItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  ingredientName: {
    fontSize: 16,
  },
  ingredientQuantity: {
    fontSize: 16,
  },
  recipeDescription: {
    fontSize: 12,
    marginVertical: 16,
    textAlign: 'center',
  },
  ingredientsList: {
    flex: 1,
  },
  instructionText: {
    fontSize: 14,
    marginVertical: 4,
  },
  instructionsContainer: {
    padding: 16,
  },
});

export default RecipeDetailsPage;