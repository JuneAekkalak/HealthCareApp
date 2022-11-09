import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  SafeAreaView,

} from 'react-native';

import {Center, NativeBaseProvider, Input} from 'native-base';
import {data1, data2, data4, data5, data6} from '../constants/data_symptom';

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
          <Text style={{color: 'black', marginTop: 12}}>{item.name}</Text>
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
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Pressable onPress={deSelectItems} style={{flex: 1, padding: 15}}>
            <View>
              <Center>
                <View>
                  <Input
                    style={[styles.center, styles.input]}
                    size="l"
                    variant="rounded"
                    w="90%"
                    py="0"
                    placeholder="ค้นหา  ปวดหัว ท้องเสีย เป็นหวัด"
                    marginTop={1}
                    marginBottom={3}
                  />
                </View>
              </Center>

              <Text style={styles.head}>คุณมีอาการอะไรบ้าง ?</Text>
              <FlatList
                numColumns={4}
                data={data1}
                renderItem={({item}) => (
                  <ListItemIcon
                    onPress={() => selectItems(item)}
                    selected={getSelected(item)}
                    item={item}
                  />
                )}
                keyExtractor={item => item.id}
              />

              <View style={[styles.title, styles.shadow]}>
                <Text style={styles.header}>ศรีษะ หูตา คอ จมูก ปาก </Text>
              </View>
              <FlatList
                style={styles.marginTop}
                data={data2}
                renderItem={({item}) => (
                  <ListItem
                    onPress={() => selectItems(item)}
                    selected={getSelected(item)}
                    item={item}
                  />
                )}
                keyExtractor={item => item.id}
              />

              <View style={[styles.title, styles.shadow]}>
                <Text style={styles.header}>ลำตัว ท้องแขน มือ อวัยวะภายใน</Text>
              </View>

              <FlatList
                style={styles.marginTop}
                data={data4}
                renderItem={({item}) => (
                  <ListItem
                    onPress={() => selectItems(item)}
                    selected={getSelected(item)}
                    item={item}
                  />
                )}
                keyExtractor={item => item.id}
              />

              <View style={[styles.title, styles.shadow]}>
                <Text style={styles.header}>
                  ลำตัวส่วนล่าง อวัยวะเพศ ขา เท้า
                </Text>
              </View>

              <FlatList
                style={styles.marginTop}
                data={data5}
                renderItem={({item}) => (
                  <ListItem
                    onPress={() => selectItems(item)}
                    selected={getSelected(item)}
                    item={item}
                  />
                )}
                keyExtractor={item => item.id}
              />

              <View style={[styles.title, styles.shadow]}>
                <Text style={styles.header}>ทั่วไป ผิวหนัง</Text>
              </View>

              <FlatList
                style={styles.marginTop}
                data={data6}
                renderItem={({item}) => (
                  <ListItem
                    onPress={() => selectItems(item)}
                    selected={getSelected(item)}
                    item={item}
                  />
                )}
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
    flex: 1,
  },
  listItemIcon: {
    backgroundColor: '#EAF4FB',
    marginBottom: 10,
    overflow: 'hidden',
  },
  listItem: {
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
  header: {
    marginTop: 15,
    marginBottom: 15,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  head: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    width: 200,
    height: 42,
  },
  center: {
    textAlign: 'auto',
  },
  title: {
    backgroundColor: 'white',
    borderRadius: 9,
    marginTop: 8,
    marginBottom: 15,
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
    color: 'black',
  },
});

export default SelectSymptom;
