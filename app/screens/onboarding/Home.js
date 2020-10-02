import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import Header from '../../components/Header';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Header route={'Failed'} navigate={props.navigation.navigate} />
      <View style={styles.mainContainer}>
        <Image
          source={require('../../assets/images/ba-logo-shield-3x.png')}
          style={styles.logo}
        />
        <Text style={[styles.title, styles.bodyText]}>
          Covid 19{'\n'}
          Health Check
        </Text>
        <Text style={[styles.mainText, styles.bodyText]}>
          Please answer the following questions related to your health and Covid
          19.
        </Text>
      </View>
      <View style={styles.bottomController}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            props.navigation.navigate('Question1');
          }}>
          <Text style={styles.btnText}>Begin</Text>
        </TouchableOpacity>
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
    backgroundColor: '#FEFEFE',
  },
  mainContainer: {
    width: '100%',
    padding: 40,
    paddingBottom: 150,
  },
  bottomController: {
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  mainText: {
    fontSize: 18,
    lineHeight: 26,
  },
  bodyText: {
    paddingLeft: 12,
    paddingTop: 21,
    fontFamily: 'Inter',
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

export default Home;
