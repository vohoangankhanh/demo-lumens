import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
export default props => {
  const {
    navigation,
    route: {
      params: {item},
    },
  } = props;
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 30},
});
