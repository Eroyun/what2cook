import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Pressable, Image, View, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { COLORS, SIZES } from '../utils/constants';

const FooterTabs = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [homeFocused, setHomeFocused] = useState(false);
  const [favouriteFocused, setFavouriteFocused] = useState(false);
  const [accountFocused, setAccountFocused] = useState(false);
  
  const homeTabFlex = useSharedValue(1)
  const homeTabColor = useSharedValue(COLORS.white)

  const favouriteTabFlex = useSharedValue(1)
  const favouriteTabColor = useSharedValue(COLORS.white)

  const accountTabFlex = useSharedValue(1)
  const accountTabColor = useSharedValue(COLORS.white)

  const homeFlexStyle = useAnimatedStyle(() => {
     return {
        flex: homeTabFlex.value
     }
  })

  const homeColorStyle = useAnimatedStyle(() => {
    return {
       backgroundColor: homeTabColor.value
    }
 })

 const favouriteFlexStyle = useAnimatedStyle(() => {
  return {
     flex: favouriteTabFlex.value
  }
})

const favouriteColorStyle = useAnimatedStyle(() => {
 return {
    backgroundColor: favouriteTabColor.value
 }
})

const accountFlexStyle = useAnimatedStyle(() => {
  return {
     flex: accountTabFlex.value
  }
})

const accountColorStyle = useAnimatedStyle(() => {
 return {
    backgroundColor: accountTabColor.value
 }
})

  const TabButton = ({label, icon, selectedIcon, outerContainerStyle, innerContainerStyle, isFocused, onPress}) => {
    return (<Pressable onPress={onPress}>
    <Animated.View style={[{ flex:1, alignItems:'center', justifyContent:'center'}, outerContainerStyle]}>
      <Animated.View style={[{
        flexDirection:'row',
        width: 110,
        height: 50,
        alignItems:"center",
        justifyContent: 'center',
        borderRadius: 25,
    
      }, innerContainerStyle]}>
      <Image
        source={isFocused ? selectedIcon : icon}
        resizeMode='contain'
        style={{
          width: 20,
          height: 20
        }}
        
      />
      {isFocused && (
          <Text
            numberOfLines={1}
            style={{
              marginLeft:SIZES.base,
              color: COLORS.gray
            }}
          >
            {label}
          </Text>)
        }
      </Animated.View>
    </Animated.View>
  </Pressable>)
  }

  useEffect(() => {
    if (route.name === "HomePage") {
      setHomeFocused(true);
      homeTabFlex.value = withTiming(4, {duration: 500})
      homeTabColor.value = withTiming(COLORS.primary, {duration: 500})
      favouriteTabFlex.value = withTiming(1, {duration: 500})
      favouriteTabColor.value = withTiming(COLORS.white, {duration: 500})
      accountTabFlex.value = withTiming(1, {duration: 500})
      accountTabColor.value = withTiming(COLORS.white, {duration: 500})
    } else if (route.name === "Favourite"){
      setFavouriteFocused(true);
      favouriteTabFlex.value = withTiming(4, {duration: 500})
      favouriteTabColor.value = withTiming(COLORS.primary, {duration: 500})
      homeTabFlex.value = withTiming(1, {duration: 500})
      homeTabColor.value = withTiming(COLORS.white, {duration: 500})
      accountTabFlex.value = withTiming(1, {duration: 500})
      accountTabColor.value = withTiming(COLORS.white, {duration: 500})
    } else if (route.name === "Account"){
      setAccountFocused(true);
      homeTabFlex.value = withTiming(1, {duration: 500})
      homeTabColor.value = withTiming(COLORS.white, {duration: 500})
      favouriteTabFlex.value = withTiming(1, {duration: 500})
      favouriteTabColor.value = withTiming(COLORS.white, {duration: 500})
      accountTabFlex.value = withTiming(4, {duration: 500})
      accountTabColor.value = withTiming(COLORS.primary, {duration: 500})
    }
  }, [route]);

  return (
    <View style={{ flexDirection: 'row' }}>

      <TabButton
          label={"Home"}
          icon={require('../../assets/navigation/home.png')}
          selectedIcon={require('../../assets/navigation/selectedHome.png')}
          isFocused={homeFocused}
          outerContainerStyle={homeFlexStyle}
          innerContainerStyle={homeColorStyle}
          onPress={() => navigation.navigate("HomePage")}
          />

      <TabButton
          label={"Fovourite"}
          icon={require('../../assets/navigation/favourite.png')}
          selectedIcon={require('../../assets/navigation/selectedFavourite.png')}
          outerContainerStyle={favouriteFlexStyle}
          innerContainerStyle={favouriteColorStyle}
          isFocused={favouriteFocused}
          onPress={() => navigation.navigate("Favourite")}
          />

      <TabButton
          label={"My Account"}
          icon={require('../../assets/navigation/user.png')}
          selectedIcon={require('../../assets/navigation/selectedUser.png')}
          outerContainerStyle={accountFlexStyle}
          innerContainerStyle={accountColorStyle}
          isFocused={accountFocused}
          onPress={() => navigation.navigate("Account")}
          />
      
    </View>
  );
};

export default FooterTabs;
