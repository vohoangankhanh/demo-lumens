import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
export default props => {
  const {
    navigation,
    route: {
      params: {setTasks, tasks},
    },
  } = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <View style={styles.container}>
      <TextInput onChangeText={setTitle} style={styles.input} />

      <TextInput onChangeText={setDescription} style={styles.inputDes} />

      <Pressable
        style={styles.button}
        onPress={() => {
          setTasks([...tasks, {}]);
          navigation.pop();
        }}>
        <Text>Add new task</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 30},
  button: {
    marginTop: 30,
    height: 80,
    width: 200,
    backgroundColor: 'yellow',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {backgroundColor: 'grey', height: 50},
  inputDes: {backgroundColor: 'grey', marginTop: 20, height: 50},
});
