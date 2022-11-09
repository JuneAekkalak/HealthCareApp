import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {NativeBaseProvider} from 'native-base';
import {data2} from '../constants/data_symptom';
import {Data2} from '../components';

const ListItem = ({item, selected, onPress, onLongPress}) => (
  <>
    <TouchableOpacity
      onPress={onPress}
      style={[styles.listItem, styles.shadow]}>
      <View style={{padding: 8}}>
        <Text style={{color: 'black'}}>{item.name}</Text>
      </View>
      {selected && <View style={styles.overlay} />}
    </TouchableOpacity>
  </>
);

const CategoryList1 = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <Pressable style={{flex: 1, padding: 15}}>
            <View>
              <FlatList
                data={data2}
                renderItem={({item}) => <ListItem item={item} />}
                keyExtractor={item => item.id}
              />
            </View>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAF4FB',
  },

  listItem: {
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden',
    height: 55,
    justifyContent: 'center',
    paddingLeft: 20,
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
  header: {
    marginTop: 15,
    marginBottom: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  head: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default CategoryList1;
