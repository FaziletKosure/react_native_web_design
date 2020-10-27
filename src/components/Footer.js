import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {Directions} from 'react-native-gesture-handler';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, marginVertical: 10}}>
        Clarusway Web Design, Copyright © 2020
      </Text>
      <Image
        style={{
          height: Dimensions.get('window').height / 10,
          width: Dimensions.get('window').width,
          margin: 20,
        }}
        source={require('../assets/cw_son.png')}
      />
    </View>
  );
};

export {Footer};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fffde7',
    alignItems: 'center',
    height: Dimensions.get('window').height / 4,
    borderTopColor: 'purple',
    borderTopWidth: 5,
  },
});
