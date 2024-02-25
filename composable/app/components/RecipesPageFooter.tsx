import {Text, View} from "react-native";
import React from "react";
import {COLORS, SIZES} from "../utils/constants";
import {LinearGradient} from 'expo-linear-gradient';
import FooterTabs from "../components/FooterTabs";

const RecipesPageFooter = () => {

    return (
        <View
            style={{
            height: 100,
            justifyContent: "flex-end"
        }}>
            <LinearGradient
                start={{
                x: 0,
                y: 0
            }}
                end={{
                x: 0,
                y: 4
            }}
                colors={[COLORS.transparent, COLORS.lightGray1]}
                style={{
                position: "absolute",
                top: -20,
                left: 0,
                right: 0,
                height: 120,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
            }}/>
            <View
                style={{
                flex: 1,
                top: 45,
                flexDirection: 'row',
                paddingHorizontal: SIZES.radius,
                paddingBottom: 5,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: COLORS.white
            }}>
                <FooterTabs/>
            </View>
        </View>
    )
}

export default RecipesPageFooter;
