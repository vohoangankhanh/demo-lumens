import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default () => {
  return (
    <View style={styles.container}>
      <Text>Coin</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 30},
});
