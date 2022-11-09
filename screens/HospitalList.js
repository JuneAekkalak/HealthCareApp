import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Box, Center, Heading, NativeBaseProvider } from 'native-base';
import { images_profile } from "../constants"

const HospitalList = () => {
  return (
    <NativeBaseProvider>
      <ScrollView style={styles.container}>
        <View style={styles.headerbox}>
          <Button
            title=""
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.back}
              source={images_profile.backarrow}
            />
          </Button>
          <Text style={styles.headertext}>โรงพยาบาลใกล้ฉัน</Text>
        </View>
        <View style={styles.innerbox}>
          <Text style={styles.inner_big_text}>โรงพยาบาลกรุงเทพ</Text>
        </View>
        <View style={styles.innerbox}>
          <Text style={styles.inner_big_text}>โรงพยาบาลศูนย์การเเพทย์มหาวิทยาลัยวลัยลักษณ์</Text>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF4FB",
    paddingBottom: 40
  },
  headerbox: {
    height: 60,
    backgroundColor: "#2585C0",
    elevation: 20,
    shadowColor: '#52006A',
  },
  back: {
    position: "absolute",
    width: 30,
    height: 30,
    left: 8,
    top: 15,
  },
  headertext: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingVertical: 14,
  },
  innerbox: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "90%",
    padding: 20,
    paddingBottom: 20,
    borderRadius: 22,
    shadowOpacity: 80,
    elevation: 15,
    marginTop: 20,
  },
  inner_big_text: {
    fontSize: 17,
    fontWeight: "bold",
    color: "gray",
    marginLeft: 10,
  },
})
export default HospitalList