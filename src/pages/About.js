import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navig, Subscribe, Footer} from '../components';

const About = () => {
  return (
    <View>
      <Navig />
      <Text>Fazilet</Text>
      <Subscribe />
      <Footer />
    </View>
  );
};

export {About};

const styles = StyleSheet.create({});
