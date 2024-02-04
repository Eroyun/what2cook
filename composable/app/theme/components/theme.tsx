import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    headerText: {
      fontSize: 32,
      textAlign: "center",
    },
  });
  
export const searchStyles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    input: {
      flex: 1,
      height: 40,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      paddingHorizontal: 10,
      marginRight: 10,
    },
    button: {
      backgroundColor: "#f96163",
      borderRadius: 8,
      padding: 10,
    },
  });

export const filterStyles = StyleSheet.create({
    container: {
      padding: 16,
    },
    filterSection: {
      marginBottom: 2,
    },
    filterSectionTitleContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    filterSectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginRight: 8,
    },
    filterIcon: {
      marginRight: 8,
    },
    selectedFiltersContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    filterButtonsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    filterButton: {
      paddingVertical: 8,
      paddingHorizontal: 24,
      borderRadius: 8,
      marginRight: 8,
      marginBottom: 8,
      flexDirection: "row",
      alignItems: "center",
    },
    selectedFilterButton: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 8,
      backgroundColor: "blue",
      marginRight: 8,
      marginBottom: 8,
      flexDirection: "row",
      alignItems: "center",
    },
    filterButtonText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "black",
    },
    selectedFilterButtonText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      backgroundColor: "white",
      padding: 16,
      borderRadius: 8,
      width: "80%",
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 16,
    },
    ingredientImage: {
      width: 45,
      height: 45,
    },
    closeButton: {
      marginTop: 16,
      alignSelf: "flex-end",
    },
    closeButtonText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "blue",
    },
    lastColumnFilterButton: {
      marginRight: 0,
    },
  });