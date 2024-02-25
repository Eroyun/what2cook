import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native"

import {
    createDrawerNavigator,
    DrawerContentScrollView
} from "@react-navigation/drawer"

import RecipesHomePage from "../pages/RecipesHomePage";

import {COLORS, SIZES, FONTS, myProfile} from "../utils/constants";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label, icon}) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                height: 40,
                marginBottom: SIZES.base,
                alignItems: "center",
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base
            }}
        >
            <Image
                source={icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: "black"
                }}/>
            <Text
                style={{
                    marginLeft: 15,
                    color: "black"
                }}
            >
                {label}
            </Text>

        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({ navigation }) => {
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1}}
        >
            <View
                style={{
                    flex:1,
                    paddingHorizontal: SIZES.radius
                }}
            >
                <View
                    style={{
                        alignItems: "flex-start",
                        justifyContent: "center"
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                        onPress={() => navigation.closeDrawer()}
                    >
                        <Image
                            source={require('../../assets/navigation/cross.png')}
                            style={{
                                height: 35,
                                width: 35,
                                tintColor: "black"
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection:"row",
                            marginTop: SIZES.radius,
                            alignItems: "center"
                        }}
                        onPress={() => console.log("Profile")}
                    >
                        <Image
                            source={myProfile?.profile_image}
                            style={{
                                height: 50,
                                width: 50,
                                borderRadius: SIZES.radius
                            }}
                        />

                        <View 
                            style={{
                                marginLeft:SIZES.radius
                            }}
                            >
                                <Text
                                    style={{
                                        color: "black"
                                    }}
                                >Hello {myProfile?.name}</Text>
                                <Text style={{
                                    color: "black"
                                }}>View your profile</Text>
                            </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            flex: 1,
                            marginTop: SIZES.padding
                        }}
                    >
                        <CustomDrawerItem
                            label={"Home"}
                            icon={require("../../assets/navigation/home.png")}
                        />

                        <CustomDrawerItem
                            label={"Notification"}
                            icon={require("../../assets/navigation/notification.png")}
                        />

                        <CustomDrawerItem
                            label={"Fovourite"}
                            icon={require("../../assets/navigation/favourite.png")}
                        />

                        <View
                            style={{
                                height: 1,
                                marginVertical: SIZES.radius,
                                marginLeft: SIZES.radius,
                                backgroundColor: COLORS.lightGray1
                            }}
                        >
                            <CustomDrawerItem
                                label={"Settings"}
                                icon={require("../../assets/navigation/settings.png")}
                            />

                            <CustomDrawerItem
                                label={"Invite a friend"}
                                icon={require("../../assets/navigation/add-friend.png")}
                            />

                            <CustomDrawerItem
                                label={"Help Center"}
                                icon={require("../../assets/navigation/customer-service.png")}
                            />
                        </View>


                    </View>

                </View>
            </View>
            
            <View
                            style={{
                                marginBottom: SIZES.padding
                            }}
                        >
                            <CustomDrawerItem
                                label={"Logout"}
                                icon={require("../../assets/navigation/logout.png")}
                            />
                        </View>
        </DrawerContentScrollView>
    )
}
const CustomDrawer = () => {
    return (
        <View
            style={{
                flex:1,
                backgroundColor: COLORS.primary
            }}
        >
            <Drawer.Navigator 
                 drawerContent={
                    props => {
                        return (
                            <CustomDrawerContent 
                                navigation={props.navigation}
                            />
                        )
                    }
                }
            >
                <Drawer.Screen name="HomePage" component={RecipesHomePage}>
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}
export default CustomDrawer;