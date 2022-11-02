import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { Box, Center, Heading, NativeBaseProvider } from 'native-base';
import { images } from "../constants"

const Home = () => {
  // const [selectB1, setSelectB1] = React.useState(false);
  // const [selectB2, setSelectB2] = React.useState(false);

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text style={styles.header}>
          HealthCare
        </Text>
        <View style={styles.box}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.label}>News</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.label}>Video</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.positionImg}>
          <Image
            style={styles.profile}
            source={images.profile}
          />
        </View>
        <View style={styles.questionBox}>
          <Text style={styles.question}>สบายดีไหม แจ็ค ?</Text>
        </View>
        <View style={[styles.row, styles.emoposition]}>
          <TouchableOpacity>
            <Image
              style={styles.emotion}
              source={images.happy}
            />
            <View style={styles.questionBox}>
              <Text style={styles.question}>สบายดี</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.emotion}
              source={images.bad}
            />
             <View style={styles.questionBox}>
              <Text style={styles.question}>ไม่สบาย</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF4FB",
  },
  header: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#105A88",
    textAlign: 'center',
    margin: 28,
  },
  box: {
    backgroundColor: "#FFFFFF",
    height: 60,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#105A88",
    backgroundColor: "white",
    marginHorizontal: "6%",
    marginTop: 10,
    minWidth: "38%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "#105A88",
    borderWidth: 2,
    borderColor: "black",
  },
  selectedLabel: {
    color: "white"
  },
  label: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  profile: {
    marginTop: 20,
    margingBottom: 20,
    width: 200,
    height: 200,
  },
  positionImg: {
    alignItems: "center",
  },
  questionBox: {
    backgroundColor: "#105A88",
    height: 55,
    margin: 20,
    marginHorizontal: "10%",
    borderRadius: 25,
  },
  question: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    paddingVertical: 15,
  },
  emotion: {
    marginTop: 20,
    margingBottom: 20,
    width: 75,
    height: 75,
    marginLeft: "15%",
  },
  emoposition: {
    justifyContent: "center"
  }
});
export default Home;
