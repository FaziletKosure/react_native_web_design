import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navigation, Subscribe, Footer} from '../components';

const Services = () => {
  return (
    <View>
      <Navigation />
      <Subscribe />
      <Footer />
    </View>
  );
};

export {Services};

const styles = StyleSheet.create({});
