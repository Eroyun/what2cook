import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { COLORS } from "../utils/constants";

const TextButton = ({ label, labelStyle, buttonContainerStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: COLORS.white,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
