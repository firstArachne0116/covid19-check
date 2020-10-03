import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const Failed = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Image source={require('../../assets/images/Passed.png')} />
        <Text style={[styles.title]}>David</Text>
        <Text style={[styles.mainText, styles.bodyText]}>
          Health Check Passed
        </Text>
        <Text style={[styles.dateText, styles.bodyText]}>Sep 23, 2020</Text>
      </View>
      <View style={styles.bottomController}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.btnText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#EFFBF2',
  },
  mainContainer: {
    width: '100%',
    padding: 40,
    alignItems: 'center',
    marginBottom: 120,
  },
  bottomController: {
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontFamily: 'Inter-Bold-slnt=0',
    paddingTop: 30,
  },
  mainText: {
    fontSize: 20,
    fontFamily: 'Inter-Bold-slnt=0',
  },
  dateText: {
    fontSize: 20,
    paddingTop: 20,
    fontFamily: 'Inter-Medium-slnt=0',
  },
  bodyText: {
    lineHeight: 30,
  },
  text: {
    marginTop: 30,
    marginBottom: 15,
    color: '#003458',
    fontSize: 30,
    textAlign: 'center',
  },
  btn: {
    width: '100%',
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#409BFA',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 128,
    height: 128,
  },
};

export default Failed;
