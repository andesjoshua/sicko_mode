import React from 'react';
import {Text, StyleSheet} from 'react-native'

const Header = () => {
   return <Text style={styles.container}>Hello, I am your Header component!</Text>;
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Header