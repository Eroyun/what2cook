import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity, Icon
} from "react-native"

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    useDrawerProgress,
    useDrawerStatus
} from "@react-navigation/drawer"

import RecipesHomePage from "../pages/RecipesHomePage";
import Animated , {interpolate, Extrapolate,  useSharedValue, withTiming, useAnimatedStyle} from "react-native-reanimated"
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

const CustomDrawerContent = ({ navigation , setScreenStyle }) => {
    const isDrawerOpen = useDrawerStatus();
    const [sv, setSV] = useState(0);
    useEffect(() => {
        if (isDrawerOpen === 'open') {
            setSV(1);
        } else {
            setSV(0);
        }
      }, [isDrawerOpen]);

    useEffect(() => {
        const scale = interpolate(
            sv,
            [0, 1],
            [1, 0.8]
          );
    
        const borderRadius = interpolate(
              sv,
              [0, 1],
              [0, 26]
            );
        const screenStyle = {borderRadius, transform:[{scale}]}
        setScreenStyle(screenStyle);
    }, [sv]);

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
                    marginBottom: SIZES.padding,
                    marginLeft:SIZES.radius
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
    const [screenStyle, setScreenStyle] = useState(null);

    const handleSetScreenStyle = (style) => {
        setScreenStyle(style);
    };

    const drawerIcon = ({focused, size}, name) => {
        console.log("dhsudau")
        return (
          <Icon
            name={name}
            size={size}
            color={"black"}
          />
        );
      };

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <Drawer.Navigator
                drawerContent={(props) => (
                    <CustomDrawerContent
                        navigation={props.navigation}
                        setScreenStyle={handleSetScreenStyle}
                    />
                )}
                screenOptions={{
                    headerShown: false,
                    drawerActiveBackgroundColor: 'transparent',
                    drawerInactiveBackgroundColor: 'transparent',
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#eee',
                    overlayColor: 'transparent',
                    drawerStyle: {
                        flex: 1,
                        width: '65%',
                        paddingRight: 20,
                        backgroundColor: 'transparent'
                    }
                }}
            >
                <Drawer.Screen
                    name="HomePage"
                >
                    {(props) => <RecipesHomePage {...props} drawerAnimationStyle={screenStyle} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    );
};

export default CustomDrawer;