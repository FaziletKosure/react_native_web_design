import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navigation, Subscribe, Footer} from '../components';

const About = () => {
  return (
    <View>
      <Navigation />
      <Subscribe />
      <Footer />
    </View>
  );
};

export {About};

const styles = StyleSheet.create({});
