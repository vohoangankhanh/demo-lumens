import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ITopTab {
  title: string;
  selected: boolean;
  onPress: void;
}
export default (props: ITopTab) => {
  const {title, selected = false, onPress} = props;
  const selectedStyles = selected
    ? {
        backgroundColor: 'black',
      }
    : null;
  const selectedTextStyle = !selected ? {color: 'grey'} : null;
  return (
    <Pressable onPress={onPress} style={[styles.container, selectedStyles]}>
      <Text style={[styles.title, selectedTextStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebedeb',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  title: {
    color: 'white',
  },
});
