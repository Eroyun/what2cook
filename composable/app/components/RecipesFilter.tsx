import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ingredients, time } from '../utils/constants';
import { filterStyles } from '../theme/components/theme';
import { Ingredient, Time } from "../utils/app_types";

const RecipesFilter: React.FC = () => {
  const [isIngredientModalVisible, setIsIngredientModalVisible] = useState(false);
  const [isTimeModalVisible, setIsTimeModalVisible] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const [selectedTime, setSelectedTime] = useState<Time | null>(null);
  const [numColumns, setNumColumns] = useState(3);

  const handleIngredientFilter = (ingredient: Ingredient) => {
    if (selectedIngredients.some((item) => item.id === ingredient.id)) {
      setSelectedIngredients(selectedIngredients.filter((item) => item.id !== ingredient.id));
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

  const renderIngredientItem = ({ item, index }: { item: Ingredient; index: number }) => {
    const isLastColumn = (index + 1) % numColumns === 0;
    return (
      <TouchableOpacity
        style={[
          filterStyles.filterButton,
          isIngredientSelected(item) && filterStyles.selectedFilterButton,
          isLastColumn && filterStyles.lastColumnFilterButton,
        ]}
        onPress={() => handleIngredientFilter(item)}
      >
        <View>
          <Image source={item.img} style={filterStyles.ingredientImage} />
          <Text
            style={[
              filterStyles.filterButtonText,
              isIngredientSelected(item) && filterStyles.selectedFilterButtonText,
            ]}
          >
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={filterStyles.container}>
      <View style={filterStyles.filterSection}>
        <View style={filterStyles.filterSectionTitleContainer}>
          <Text style={filterStyles.filterSectionTitle}>Ingredients</Text>
          <TouchableOpacity
            style={filterStyles.filterIcon}
            onPress={() => setIsIngredientModalVisible(true)}
          >
            <Ionicons name="filter" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={filterStyles.selectedFiltersContainer}>
          {selectedIngredients.map((ingredient) => (
            <TouchableOpacity
              key={ingredient.id}
              style={filterStyles.selectedFilterButton}
              onPress={() => handleIngredientFilter(ingredient)}
            >
              <Text style={filterStyles.selectedFilterButtonText}>{ingredient.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

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

      <Modal
        visible={isIngredientModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsIngredientModalVisible(false)}
      >
        <View style={filterStyles.modalContainer}>
          <View style={filterStyles.modalContent}>
            <Text style={filterStyles.modalTitle}>Select Ingredients</Text>
            {numColumns === 3 && (
              <FlatList
                data={ingredients as Ingredient[]} // Explicitly define the type of the data
                renderItem={renderIngredientItem}
                keyExtractor={(item) => item.id.toString()}
                extraData={selectedIngredients}
                numColumns={2}
              />
            )}
            {numColumns === 2 && (
              <FlatList
                data={ingredients as Ingredient[]} // Explicitly define the type of the data
                renderItem={renderIngredientItem}
                keyExtractor={(item) => item.id.toString()}
                extraData={selectedIngredients}
                numColumns={2}
              />
            )}
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
