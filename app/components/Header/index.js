/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
export const {width, height} = Dimensions.get('window');

export default (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header]}>
        <TouchableOpacity onPress={() => props.navigate(props.route)}>
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  btnText: {
    color: '#007AFF',
    fontSize: 16,
  },
});
