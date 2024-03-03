import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";

import { COLORS, SIZES, ingredients, time, ratings } from "../utils/constants";
import IconButton from "../components/IconButton";
import TextButton from "../components/TextButton";
import TextIconButton from "../components/TextIconButton";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import Api from "../api/qdrant";
import { useNavigation } from "@react-navigation/native";

const Section = ({ containerStyle, title, children }) => {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
        ...containerStyle,
      }}
    >
      <Text
        style={{
          marginLeft: 6,
          fontSize: 16,
        }}
      >
        {title}
      </Text>
      {children}
    </View>
  );
};

const FilterModal = ({ isVisible, onClose }) => {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  const [showFilterModal, setShowFilterModal] = useState(isVisible);

  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 680],
  });

  const [timeValue, setTimeValue] = useState(0);
  const [ratingsValue, setRatingsValue] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const api = new Api();
  const navigation = useNavigation();

  const handleFilter = () => {
    const filters = {
      totalTime: timeValue !== 0 ? timeValue : null,
      ingredients: selectedIngredients.length > 0 ? selectedIngredients : null,
    };

    api
      .post("filter", filters)
      .then((response) => {
        // Redirect to the search result page with the results
        navigation.navigate("ResultsPage", { results: response.data });
        setShowFilterModal(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  function renderTime() {
    return (
      <Section
        title="Time"
        containerStyle={{
          marginTop: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {time.map((item, index) => {
            return (
              <TextButton
                key={`time-${index}`}
                label={item.value}
                labelStyle={{
                  color: item.key == timeValue ? COLORS.white : "black",
                }}
                buttonContainerStyle={{
                  width: "30%",
                  height: 50,
                  margin: 5,
                  alignItems: "center",
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.key == timeValue ? COLORS.primary : COLORS.lightGray2,
                }}
                onPress={() => setTimeValue(item.key)}
              />
            );
          })}
        </View>
      </Section>
    );
  }

  function renderIngredients() {
    return (
      <Section
        containerStyle={{
          marginTop: 40,
        }}
      >
        <View>
          <MultipleSelectList
            setSelected={(val) => setSelectedIngredients(val)}
            data={ingredients}
            save="value"
            placeholder="Ingredients"
            search={false}
            label="Ingredients"
          />
        </View>
      </Section>
    );
  }

  function renderRatings() {
    return (
      <Section
        title="Ratings"
        containerStyle={{
          marginTop: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {ratings.map((item, index) => {
            return (
              <TextIconButton
                key={`Ratings-${index}`}
                containerStyle={{
                  flex: 1,
                  height: 50,
                  margin: 5,
                  alignItems: "center",
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == ratingsValue
                      ? COLORS.primary
                      : COLORS.lightGray2,
                }}
                label={item.label}
                labelStyle={{
                  color: item.id == ratingsValue ? COLORS.white : "black",
                }}
                icon={require("../../assets/utils/star.png")}
                iconStyle={{
                  tintColor:
                    item.id == ratingsValue ? COLORS.white : COLORS.gray,
                }}
                onPress={() => setRatingsValue(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  }

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentBlack7,
        }}
      >
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </TouchableWithoutFeedback>

        <Animated.View
          style={{
            position: "absolute",
            left: 0,
            top: modalY,
            width: "100%",
            height: "100%",
            padding: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            backgroundColor: COLORS.white,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 18,
              }}
            >
              Filter Your Search
            </Text>

            <IconButton
              containerStyle={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: COLORS.gray2,
              }}
              icon={require("../../assets/navigation/cross.png")}
              iconStyle={{
                tintColor: COLORS.gray2,
              }}
              onPress={() => setShowFilterModal(false)}
            />
          </View>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 250,
            }}
          >
            {renderTime()}

            {renderIngredients()}

            {renderRatings()}
          </ScrollView>

          <View
            style={{
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.radius,
              backgroundColor: COLORS.white,
            }}
          >
            <TextButton
              label="Apply Filters"
              buttonContainerStyle={{
                marginBottom: 200,
                height: 50,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.primary,
              }}
              onPress={handleFilter}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
