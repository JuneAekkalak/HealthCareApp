//npx expo install react-native-maps
import {NativeBaseProvider} from 'native-base';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {enableLatestRenderer,Marker} from 'react-native-maps';
import React from 'react';

enableLatestRenderer();

const tokyoRegion = {
  latitude: 8.642448055039303,
  longitude: 99.89595000771678,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
  title: 'Foo Place',
  subtitle: '1234 Foo Drive'
};

const Maps = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={tokyoRegion} //your region data goes here.
        >
          {/*Make sure the Marker component is a child of MapView. Otherwise it won't render*/}
          <Marker coordinate={tokyoRegion} />
        </MapView>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});

export default Maps;
