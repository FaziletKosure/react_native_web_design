import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import {bounce} from 'react-native/Libraries/Animated/src/Easing';

import {Navigation, Subscribe, Footer} from '../components';

const Home = () => {
  return (
    <ScrollView style={{flex: 1}} bounce={true}>
      <Navigation />
      <ImageBackground
        style={{
          height: Dimensions.get('window').height / 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={require('../assets/showcase.jpg')}>
        <Text
          style={{
            color: 'white',
            fontSize: 35,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          ProFessional Web Design
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 5,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem
          interdum condimentum.
        </Text>
      </ImageBackground>
      <Subscribe />

      <Footer />
    </ScrollView>
  );
};

export {Home};

const styles = StyleSheet.create({});
