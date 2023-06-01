import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TopTab from './components/TopTab';
import {SafeAreaView} from 'react-native-safe-area-context';

const TOP_TABS = [
  {id: 1, title: 'Ongoing'},
  {id: 2, title: 'Available'},
  {id: 3, title: 'History'},
];

const MOCK_DATA = [
  {
    id: 1,
    title: 'Expo Hall 7',
    price: 65,
    fromTitle: 'Expo Hall 7',
    fromAddress: 'Expo Hall 7, Singapore',
    toTitle: 'Far East Plaza',
    toAddress: '14, Scotts Road, Orchard, Singapore, Singapore, 228213',
  },
];
export default ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const renderItem = ({item, id}) => {
    console.log('render Itemm====', item);
    return (
      <Pressable
        style={styles.item}
        onPress={() => navigation.navigate('JobDetails')}>
        <View style={styles.itemHeader}>
          <Text style={{color: 'white'}}>{item.fromTitle}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white'}}>
            {item.fromTitle} - <Text>{item.fromAddress}</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white'}}>
            {item.toTitle} - <Text>{item.toAddress}</Text>
          </Text>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Jobs</Text>
      <ScrollView horizontal contentContainerStyle={styles.topTabStyle}>
        {TOP_TABS.map(item => {
          return (
            <TopTab
              selected={selectedTab === item.id}
              key={item.id}
              title={item.title}
              onPress={() => setSelectedTab(item.id)}
            />
          );
        })}
      </ScrollView>
      {selectedTab === 1 && (
        <FlatList
          data={MOCK_DATA}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemHeader: {flexDirection: 'row'},
  container: {padding: 16},
  topTabStyle: {
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  item: {
    justifyContent: 'space-around',
    padding: 10,
    height: 200,
    backgroundColor: 'black',
  },
});
