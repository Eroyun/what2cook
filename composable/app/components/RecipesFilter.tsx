import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  Image,
  ScrollView,
  Button
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ingredients, time } from "../utils/constants";
import { filterStyles } from "../theme/components/theme";
import { Ingredient, Time } from "../utils/app_types";
import DropDownPicker from 'react-native-dropdown-picker';


const RecipesFilter: React.FC = () => {
  const [isIngredientModalVisible, setIsIngredientModalVisible] = useState(
    false
  );
  const [isTimeModalVisible, setIsTimeModalVisible] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>(
    []
  );
  const [selectedTime, setSelectedTime] = useState<Time | null>(null);
  const [numColumns, setNumColumns] = useState(1);

  const [selectedValue, setSelectedValue] = useState('recipes_bageltoppers');

  const handleIngredientFilter = (ingredient: Ingredient) => {
    if (selectedIngredients.some((item) => item.id === ingredient.id)) {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item.id !== ingredient.id)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const handleTimeFilter = (time: Time) => {
    setSelectedTime(time === selectedTime ? null : time);
  };

  const isIngredientSelected = (ingredient: Ingredient) => {
    return selectedIngredients.some((item) => item.id === ingredient.id);
  };

  const isTimeSelected = (time: Time) => {
    return time === selectedTime;
  };

  const renderIngredientItem = ({ item }: { item: Ingredient }) => {
    const isIngredientSelected = selectedIngredients.some(
      (selectedItem) => selectedItem.id === item.id
    );

    const handleAddIngredient = () => {
      if (isIngredientSelected) {
        setSelectedIngredients(
          selectedIngredients.filter((selectedItem) => selectedItem.id !== item.id)
        );
      } else {
        setSelectedIngredients([...selectedIngredients, item]);
      }
    };

    return (
      <TouchableOpacity
        style={[
          filterStyles.filterButton,
          isIngredientSelected && filterStyles.selectedFilterButton,
        ]}
        onPress={handleAddIngredient}
      >
        <View style={filterStyles.ingredientContainer}>
          <View style={filterStyles.ingredientDetails}>
            <Text
              style={[
                filterStyles.filterButtonText,
                isIngredientSelected && filterStyles.selectedFilterButtonText,
              ]}
            >
              {item.name}
            </Text>
          </View>
          <TouchableOpacity
            style={filterStyles.addButton}
            onPress={handleAddIngredient}
          >
            <Ionicons
              name={isIngredientSelected ? "remove" : "add"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={filterStyles.container}>
      <View style={filterStyles.filterSection}>
        <View style={filterStyles.filterSectionTitleContainer}>
            <Button title="Filter" onPress={() => setIsIngredientModalVisible(true)} />
        </View>
        <View style={filterStyles.selectedFiltersContainer}>
          {selectedIngredients.map((ingredient) => (
            <TouchableOpacity
              key={ingredient.id}
              style={filterStyles.selectedFilterButton}
              onPress={() => handleIngredientFilter(ingredient)}
            >
              <Text style={filterStyles.selectedFilterButtonText}>
                {ingredient.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* <View>
      <Text>Product Category</Text>
      <DropDownPicker
        items={[
          { label: 'Browse By Brand', value: 'Browse By Brand' },
          { label: 'Latest Recipes', value: 'recipes_Latest Recipes' },
          { label: 'Recipe Videos', value: 'recipe-videos' },
          { label: 'Company Classics', value: 'recipes_companyclassics' },
          { label: 'Appetizers', value: 'recipes_appetizers' },
          { label: 'Bagel Toppers', value: 'recipes_bageltoppers' },
          { label: 'Beverages', value: 'recipes_beverages' },
          { label: 'Breads', value: 'recipes_breads' },
          { label: 'Breakfast', value: 'recipes_breakfast' },
          { label: 'Desserts', value: 'recipes_desserts' },
          { label: 'Dessert Waffles', value: 'recipes_dessertwaffles' },
          { label: 'Grilled Cheese', value: 'recipes_grilledcheese' },
          { label: 'Main Courses', value: 'recipes_main-courses' },
          { label: 'Salads', value: 'recipes_salads' },
          { label: 'Side Dishes', value: 'recipes_side-dishes' },
          { label: 'Soups', value: 'recipes_soups' },
          { label: 'Toast Toppers', value: 'recipes_toasttoppers' },
        ]}
        value={selectedValue}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: '#fafafa' }}
        listItemContainerStyle={{
          justifyContent: 'flex-start',
        }}
        listParentContainerStyle={{ backgroundColor: '#fafafa' }}
        onSelectItem={(item) => setSelectedValue(item.value)}
      />
    </View> */}
      </View>

      

      <Modal
        visible={isIngredientModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsIngredientModalVisible(false)}
      >
        <View style={filterStyles.modalContainer}>
          <View style={filterStyles.modalContent}>
            <Text style={filterStyles.modalTitle}>Select Ingredients</Text>
            <ScrollView>
              <FlatList
                data={ingredients as Ingredient[]}
                renderItem={renderIngredientItem}
                keyExtractor={(item) => item.id.toString()}
                extraData={selectedIngredients}
                numColumns={numColumns}
              />
              <View style={filterStyles.filterSection}>
        <Text style={filterStyles.filterSectionTitle}>Time</Text>
        <View style={filterStyles.filterButtonsContainer}>
          {time.map((t) => (
            <TouchableOpacity
              key={t.id}
              style={[
                filterStyles.filterButton,
                isTimeSelected(t) && filterStyles.selectedFilterButton,
              ]}
              onPress={() => handleTimeFilter(t)}
            >
              <Text
                style={[
                  filterStyles.filterButtonText,
                  isTimeSelected(t) && filterStyles.selectedFilterButtonText,
                ]}
              >
                {t.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
            </ScrollView>
            <TouchableOpacity
              style={filterStyles.closeButton}
              onPress={() => setIsIngredientModalVisible(false)}
            >
              <Text style={filterStyles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RecipesFilter;
