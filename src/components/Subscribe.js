import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

const Subscribe = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold',
          marginTop: 20,
        }}>
        Subscribe To Our Newsletter
      </Text>
      <View style={styles.subscribe}>
        <TextInput style={styles.input} placeholder="Enter Email..." />
        <TouchableOpacity style={styles.sub}>
          <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
            Subsicribe
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {Subscribe};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#1c313a',
    alignItems: 'center',
    height: Dimensions.get('window').height / 4,
  },
  subscribe: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginVertical: 30,
    justifyContent: 'space-around',
    alignItems: 'center',

    // backgroundColor: 'white',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    width: '50%',
    height: '70%',
    margin: 10,
  },
  sub: {
    // flex: 1,
    backgroundColor: 'purple',
    width: '30%',
    height: '70%',
    padding: 5,
    margin: 5,
    color: 'white',
  },
});
