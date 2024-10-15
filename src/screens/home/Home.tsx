import {StyleSheet, Text, View} from 'react-native';
import {s, Scale, ScaledSheet} from 'react-native-size-matters';
import React from 'react';
import Header from '../../components/Header';
import Featured from '../../components/Featured';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Featured />
    </View>
  );
};

export default Home;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfcfd',
  },
});
