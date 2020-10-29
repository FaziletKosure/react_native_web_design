import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const Navig = (props) => {
  console.log('props', props);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.text, {color: '#8e24aa'}]}>Clarusway </Text>
        <Text style={[styles.text, {color: 'white'}]}>Web Design</Text>
      </View>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.navText}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AboutPage')}>
          <Text style={styles.navText}>ABOUT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ServicesPage')}>
          <Text style={styles.navText}>SERVICES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {Navig};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#1c313a',
    alignItems: 'center',
    height: Dimensions.get('window').height / 4,
    borderBottomColor: 'purple',
    borderBottomWidth: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  nav: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around',
    // backgroundColor: 'white',
  },
  navText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
