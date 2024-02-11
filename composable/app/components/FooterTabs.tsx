import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Pressable, Image, View, Text } from 'react-native';

const FooterTabs = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [homeFocused, setHomeFocused] = useState(false);
  const [favouriteFocused, setFavouriteFocused] = useState(false);
  const [accountFocused, setAccountFocused] = useState(false);
  
  useEffect(() => {
    if (route.name === "HomePage") {
      setHomeFocused(true);
    } else if (route.name === "Favourite"){
      setFavouriteFocused(true);
    } else if (route.name === "Account"){
      setAccountFocused(true);
    }
  }, [route]);

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Pressable onPress={() => navigation.navigate("HomePage")}>
        <View style={{ alignItems: 'center', justifyContent: 'center', top: 30, marginLeft: 60 }}>
          <Image
            source={homeFocused ? require('../../assets/navigation/selectedHome.png') : require('../../assets/navigation/home.png')}
            resizeMode='contain'
            style={{
              width: 40,
              height: 40
            }}
          />
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Favourite")}>
        <View style={{ alignItems: 'center', justifyContent: 'center', top: 30, marginLeft: 60, marginRight: 60 }}>
          <Image
            source={favouriteFocused ? require('../../assets/navigation/selectedFavourite.png') : require('../../assets/navigation/favourite.png')}
            resizeMode='contain'
            style={{
              width: 40,
              height: 40
            }}
          />
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Account")}>
        <View style={{ alignItems: 'center', justifyContent: 'center', top: 30 }}>
          <Image
            source={accountFocused ? require('../../assets/navigation/selectedUser.png') : require('../../assets/navigation/user.png')}
            resizeMode='contain'
            style={{
              width: 40,
              height: 40
            }}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default FooterTabs;
