import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";
import InputButton from 'react-native-really-awesome-button/src/themes/fastTrack';

function Button(props) {
  return (
    <InputButton
      onPress={next => {
        /** Do Something **/
        next();
      }}
    >
      <Image source={{uri: props.image}} style={{width: 100, height: 55}}/>
    </InputButton>
  );
}

export default function App() {
  return (
    <ScrollView style={Styles.container}>
      <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start"
      }}>
        <Image
        style={Styles.profilePic}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}/>
      </View>
      <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-end"
      }}>
        <Image
        style={Styles.profilePic}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}/>
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
      <Button image="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg">
      </Button>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#156349',
    backgroundColor: '#000000',
    borderColor: '#965215'
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#242038',
  },
  text: {
    fontSize: 30,
    color: '#235852'
  },
  profilePic: {
    width: 50,
    height: 50
  }
})

/*
Dark Purple - #242038
Slate Blue - #725AC1
Middle Blue Purple - #
Lavender Grey - # 
Linen - #
*/