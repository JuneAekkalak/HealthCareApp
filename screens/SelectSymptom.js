import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import {Center, NativeBaseProvider} from 'native-base';
import { data1, data2 } from '../constants/data_symptom';


const ListItemIcon = ({item, selected, onPress, onLongPress}) => (
  <>
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.listItemIcon}>
      <View style={{padding: 8}}>
        <Center>
          <Image
            source={item.img}
            style={{
              marginTop: 0,
              marginBottom: 0,
              width: 56.5,
              height: 50,
              borderWidth: 2,
              resizeMode: 'contain',
              margin: 8,
            }}
          />
          <Text style={{color: 'black',marginTop:12}}>{item.name}</Text>
        </Center>
      </View>
      {selected && <View style={styles.overlay} />}
    </TouchableOpacity>
  </>
);

const ListItem = ({item, selected, onPress, onLongPress}) => (
  <>
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.listItem}>
      <View style={{padding: 8}}>
        <Text style={{color: 'black'}}>{item.name}</Text>
      </View>
      {selected && <View style={styles.overlay} />}
    </TouchableOpacity>
  </>
);

const SelectSymptom = props => {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleOnPress = contact => {
    if (selectedItems.length) {
      return selectItems(contact);
    }

    // here you can add you code what do you want if user just do single tap
    console.log('pressed');
  };

  const getSelected = contact => selectedItems.includes(contact.id);
  const [item] = useState('');
  const deSelectItems = () => setSelectedItems([]);

  const selectItems = item => {
    if (selectedItems.includes(item.id)) {
      const newListItems = selectedItems.filter(
        listItem => listItem !== item.id,
      );
      return setSelectedItems([...newListItems]);
    }
    setSelectedItems([...selectedItems, item.id]);
  };

  return (
    
    <NativeBaseProvider >
        <Pressable onPress={deSelectItems} style={{flex: 1, padding: 15}}>
        <View style={styles.container}>      
        <Text style={styles.head}>คุณมีอาการอะไรบ้าง ?</Text>
          <FlatList        
            numColumns={4}
            data={data1}
            renderItem={({item}) => (
              <ListItemIcon
                onPress={() => handleOnPress(item)}
                onPress={() => selectItems(item)}
                selected={getSelected(item)}
                item={item}
              />
            )}
            keyExtractor={item => item.id}
          />
          <Center>
            <Text style={styles.header}>ศรีษะ หูตา คอ จมูก ปาก </Text>
          </Center>
          <FlatList
            style={styles.marginTop}
            data={data2}
            renderItem={({item}) => (              
              <ListItem
                onPress={() => handleOnPress(item)}
                onPress={() => selectItems(item)}
                selected={getSelected(item)}
                item={item}
              />
            )}
            keyExtractor={item => item.id}
          />
          </View>
        </Pressable>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAF4FB"
  },
  listItemIcon: {
    backgroundColor: '#EAF4FB',
    marginBottom: 10,
    overflow: 'hidden',
  },
  listItem:{
    backgroundColor: '#EAF4FB',
    marginBottom: 10,
    overflow: 'hidden',
    borderBottomWidth: 0.19,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(75, 205, 239, 0.3)',
  },
  marginTop: {
    marginTop: 0,
  },
  header:{
    marginTop:15,
    marginBottom:15,
    color:'black',
    fontWeight: 'bold'
  },
  head:{
    color:'black',
    fontWeight: 'bold',
    marginBottom:15,
    textAlign:"center"
  }
});

export default SelectSymptom;
