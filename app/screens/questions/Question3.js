import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import Header from '../../components/Header';

const Question1 = (props) => {
  return (
    <View style={styles.container}>
      <Header route={'Home'} navigate={props.navigation.navigate} />
      <View style={styles.mainContainer}>
        <View style={styles.mainContent}>
          <Text style={[styles.mainText]}>
            To the best of your knowledge have you been in close proximity, in
            the last 14 days, to any individual who tested positive for
            COVID-19?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                if (props.navigation.getParam('failed', false)) {
                  props.navigation.navigate('Failed');
                } else {
                  props.navigation.navigate('Passed');
                }
              }}>
              <Image source={require('../../assets/images/NO.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{paddingLeft: 17}}
              onPress={() => props.navigation.navigate('Failed')}>
              <Image source={require('../../assets/images/YES.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.step}>
          <Text style={styles.stepText}>Question 3 of 3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
  mainContainer: {
    width: '100%',
    padding: 40,
  },
  mainContent: {
    marginBottom: 90,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingTop: 36,
  },
  mainText: {
    fontSize: 22,
    fontFamily: 'Inter-Medium-slnt=0',
    lineHeight: 34,
  },
  text: {
    marginTop: 30,
    marginBottom: 15,
    color: '#003458',
    fontSize: 30,
    textAlign: 'center',
  },
  step: {
    borderRadius: 30,
    backgroundColor: '#F9F9F9',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    padding: 2,
    paddingBottom: 4,
    width: 142,
  },
  stepText: {
    color: '#888888',
    fontSize: 16,
  },
  logo: {
    width: 128,
    height: 128,
  },
};

export default Question1;
