import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  Button,
} from "react-native";
import { ingredients, time , categories} from "../utils/constants";
import { filterStyles } from "../theme/components/theme";
import {  MultipleSelectList } from "react-native-dropdown-select-list";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";

const RecipesFilter: React.FC = () => {
  const [isIngredientModalVisible, setIsIngredientModalVisible] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedTime, setSelectedTime] = useState([])

  console.log(selectedIngredients)
  console.log(selectedTime)

  
  return (
    <View style={filterStyles.container}>
      <View style={filterStyles.filterSection}>
        <TouchableOpacity onPress={() => setIsIngredientModalVisible(true)}>
          <Icon name="filter-variant" size={24} color="black" style={filterStyles.filterIcon} />
        </TouchableOpacity>
      </View>

      <Modal
        visible={isIngredientModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsIngredientModalVisible(false)}
      >
        <View style={filterStyles.modalContainer}>
          <View style={filterStyles.modalContent}>
            <ScrollView>
              <MultipleSelectList
                setSelected={(val) => setSelectedIngredients(val)}
                data={ingredients}
                save="value"
                placeholder="Ingredients"
              />
              <MultipleSelectList
                setSelected={(val) => setSelectedTime(val)}
                data={time}
                save="value"
                placeholder="Time"
              />
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
