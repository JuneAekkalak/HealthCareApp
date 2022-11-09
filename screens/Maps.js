//npx expo install react-native-maps
import {NativeBaseProvider} from 'native-base';
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { enableLatestRenderer } from 'react-native-maps';
import React from 'react'

enableLatestRenderer();

const Maps = () => {
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
            </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1 ,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width
    },
})

export default Maps