import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, Modal, TextInput, Pressable } from 'react-native';

export default function WelcomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/fa800ce29600a69c212d70662a2f2a5670771e4e7b33bc5d05373c2bf8e2a8c3.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        
        <View style={styles.header}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.iconContainer}>
              <Image
                source={require("../assets/d9364a4305e84af9d066071b329515b15c0670e9c3fd9b06c5541b291998d559.jpg")}
                style={styles.icon}
              />
            </TouchableOpacity>
        </View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  value={password}
                  secureTextEntry
                  onChangeText={setPassword}
                />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

        <View style={styles.content}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.title}>to</Text>
          <Text style={styles.title}>What2Eat</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={()=>(console.log("dfjks"))}
            >
              
              <Text style={styles.optionText}>Get Delivery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={()=>(console.log("dfjks"))}
            >
              
              <Text style={styles.optionText}>Cook at Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 3)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 100
  },
  optionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    fontWeight: '600',
  },
  iconContainer: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#000',
    overflow: 'hidden',
  },
  icon: {
    width: 50,
    height: 50,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
    borderRadius: 5,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 30,
    bottom: 130
  },
});
