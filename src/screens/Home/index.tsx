import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const DATA = [
  {
    id: 1,
    title: 'buy apple',
    description: 'buy 1 kg apples',
    status: 'complete',
  },
  {
    id: 2,
    title: 'buy banana',
    description: 'buy 1 kg banana',
    status: 'incomplete',
  },
  {
    id: 3,
    title: 'buy pear',
    description: 'buy 1 kg pear',
    status: 'complete',
  },
  {
    id: 4,
    title: 'buy watermelon',
    description: 'buy 1 kg watermelon',
    status: 'incomplete',
  },
  {
    id: 5,
    title: 'buy strawberry',
    description: 'buy 1 kg strawberry',
    status: 'incomplete',
  },
];
export default props => {
  const {navigation} = props;
  const [tasks, setTasks] = useState(DATA);
  const renderItem = ({item, index}) => {
    const gotoDetails = () => {
      navigation.navigate('Details', {item, setTasks, tasks});
    };
    return (
      <Pressable style={styles.item} onPress={gotoDetails}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>{item.status}</Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        extraData={tasks}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('AddTask');
        }}>
        <Text>Add new task</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    height: 80,
    width: 200,
    backgroundColor: 'yellow',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {padding: 30},
  item: {
    backgroundColor: 'green',
    marginTop: 20,
  },
});
