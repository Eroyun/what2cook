import {StyleSheet} from "react-native";
import {colors} from "../../utils/constants";

export const headerStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 24
    },
    headerText: {
        fontSize: 32,
        textAlign: "center"
    }
});

export const searchStyles = StyleSheet.create({
    container: {
        flexDirection: "row",  // Make it a row
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        paddingVertical: 5,
      },
      inputContainer: {
        flex: 1,
        marginRight: 5,
      },
      input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: "#000",
        paddingHorizontal: 5,
        width: 200
      },
      searchIcon: {
        position: "relative",
        right: 35
      }
});

export const filterStyles = StyleSheet.create({
    categoryDropdownContainer: {
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: 4,
        paddingHorizontal: 8,
      },
        container: {
            padding: 16
        },
        filterSection: {
            marginBottom: 2
        },
    filterSectionTitleContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    filterSectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginRight: 8
    },
    filterIcon: {
        marginRight: 10
    },
    selectedFiltersContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    filterButtonsContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    filterButton: {
        paddingVertical: 8,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginRight: 8,
        marginBottom: 8,
        flexDirection: "row",
        alignItems: "center"
    },
    selectedFilterButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: colors.secondaryAccent,
        marginRight: 8,
        marginBottom: 8,
        flexDirection: "row",
        alignItems: "center"
    },
    filterButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black"
    },
    selectedFilterButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white"
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    modalContent: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      width: "70%",
      alignSelf: "center",
      maxHeight: "80%",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 16
    },
    closeButton: {
        marginTop: 16,
        alignSelf: "flex-end"
    },
    closeButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "blue"
    },
    lastColumnFilterButton: {
        marginRight: 0
    },
    ingredientContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 2,
      width: "100%",
    },
    ingredientDetails: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
    addButton: {
      backgroundColor: "lightgray",
      borderRadius: 8,
    },
});

export const homepageStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',  // Adjust as needed
      paddingHorizontal: 16,
      paddingVertical: 8,
      alignItems: 'center',
    },
  });
  