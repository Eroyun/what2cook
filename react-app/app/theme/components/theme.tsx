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
        flexDirection: "row", // Make it a row
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    inputContainer: {
        flex: 1,
        marginRight: 5
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
        paddingHorizontal: 8
    },
    container: {
        padding: 16
    },
    filterCategories: {
        marginBottom: 2
    },
    filterSection: {
        alignItems: 'center',
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
        maxHeight: "80%"
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
        width: "100%"
    },
    ingredientDetails: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    },
    addButton: {
        backgroundColor: "lightgray",
        borderRadius: 8
    }
});

export const homepageStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Adjust as needed
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center'
    }
});

export const categoriesStyles = StyleSheet.create({
    categoryImage: {
        width: 40,
        height: 40
    },
    text: {
        color: COLORS.accent,
        textAlign: 'center', // Center text horizontally
        marginTop: 5
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
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },
    icon: {
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.accent,
        marginHorizontal: 6,
        marginVertical: 10
    },
    selectedIcon: {
        backgroundColor: COLORS.accent
    },
    categoryItem: {
        alignItems: 'center', // Center items vertically in the container
        justifyContent: 'center', // Center items horizontally in the container
        marginRight: 10, // Add space to the right of each category item
    }
});

export const homepageStylesRecipeCard = StyleSheet.create({
    item: {
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.1,
        borderRadius: 16,
        marginVertical: 16,
        marginRight: 16,
        flexDirection: "row",
        alignItems: "flex-start",
        paddingHorizontal: 16, // Adjust padding
        paddingVertical: 8, // Adjust padding
        position: 'relative', // Position relative for absolute positioning
    },
    imageContainer: {
        overflow: "hidden",
        borderRadius: 90,
        top: 10
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "cover"
    },
    moreInfo: {
        position: "absolute",
        top: 8,
        left: 8,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.main,
        borderRadius: 50,
        opacity: 0.8
    },
    moreInfoText: {
        color: "white",
        fontSize: 16,
        marginRight: 4
    },
    time: {
        color: "white",
        fontSize: 12
    },
    detailsContainer: {
        width: 170, // Adjust the width as needed
        height: 120,
        marginLeft: 8,
        marginTop: 8, // Adjust the top margin
        justifyContent: "space-between",
        flexShrink: 1, // Ensure it doesn't grow based on content
    },
    itemTitle: {
        fontSize: 16,
        marginTop: 10, // Adjust the top margin
        flexWrap: 'wrap', // Allow title to wrap to the next line
    },
    starRatingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5, // Adjust the margin as needed
    },
    detailsButton: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8, // Adjust the top margin
    },
    detailsButtonText: {
        color: COLORS.main,
        marginRight: 8
    },
    favoriteButton: {
        position: 'absolute',
        top: 8,
        right: 12
    }
});
