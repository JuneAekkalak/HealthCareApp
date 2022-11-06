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

import {NativeBaseProvider} from 'native-base';
import { data1 } from '../constants/data_symptom';



const ListItem = ({item, selected, onPress, onLongPress}) => (
  <>
    <TouchableOpacity
      onPress={onPress}
      // onPress={onLongPress}
      style={styles.listItem}>
      <View style={{padding: 8}}>
        <Text style={{color: 'white'}}>{item.name}</Text>
      </View>
      {selected && <View style={styles.overlay} />}
    </TouchableOpacity>
  </>
);

const SelectSymptom = (props) => {
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
        <Pressable style={{flex: 1, padding: 15}}>
            <View style={styles.container}>      
                <FlatList        
                    data={data1}
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

  listItem:{
    backgroundColor: '#0076BE',
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden',
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
