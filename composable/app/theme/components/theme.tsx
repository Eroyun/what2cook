import {StyleSheet} from "react-native";
import {COLORS} from "../../utils/constants";

export const headerStyles = StyleSheet.create({
    container: {
        fontWeight: "600",
        margin: 24
    },
    headerText: {
        fontSize: 32
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
        filterCategories:{
            marginBottom: 2
        },
        filterSection: {
            alignItems:'center',
            marginBottom: 2, 
            padding: 7,
            backgroundColor: COLORS.accent,
             borderRadius: 999 
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
        backgroundColor: COLORS.secondaryAccent,
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
  
export  const categoriesStyles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: 10, // Adjust padding if needed
  },
    categoryImage: {
        width: 50,
        height: 50
      },
      text:{
        color: COLORS.accent
      },
      selectedText:{
        color: 'white'
      },
      arrowContainer: {
        position: "relative",
        left: "50%",
        marginLeft: -15,
        width: 30,
        height: 30,
        borderRadius: 15,
        top:2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.accent
      },
      selectedArrowContainer: {
        position: "relative",
        left: "50%",
        marginLeft: -15,
        top:2,
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
      },
      arrowImage: {
        width: 20,
        alignItems: 'center',
        color: 'white',
        padding: 5
      },
      selectedArrow: {
        width: 20,
        alignItems: 'center',
        color: COLORS.accent,
        padding: 5
      },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    filterCategories: {
      width: "100%",
      left: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap", // Add flexWrap
    },
  
    iconContainer: {
      flexDirection: "row",
      paddingHorizontal: 16, // Adjust padding if needed
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    icon: {
      padding: 5,
      borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.accent,
        marginHorizontal:5
    },
    selectedIcon: {
      backgroundColor: COLORS.accent,
    },
  });