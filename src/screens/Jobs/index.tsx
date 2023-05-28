import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default () => {
  return (
    <View style={styles.container}>
      <Text>Jobs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 30},
});
