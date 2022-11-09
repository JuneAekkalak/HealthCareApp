import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Button} from 'react-native';

import { Box, Center, Heading, NativeBaseProvider} from 'native-base';
import { images_profile } from "../constants"
import { border } from 'native-base/lib/typescript/theme/styled-system';
const Profile = (props) => {
    //const [show, setShow] = React.useState(false);
    //const handleClick = () => setShow(!show);
    return (
        <NativeBaseProvider>
            <ScrollView style={styles.container}>
                <View style={styles.headerbox}>
                    <Text style={styles.headertext}>My Profile</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('EditProfile')}>
                        <Image
                            style={styles.edit_pic}
                            source={images_profile.edit}
                            // onPress={() => props.navigation.navigate('EditProfile')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Image
                        style={styles.profile_pic}
                        source={images_profile.profile_pic}
                    />
                    <Text style={{ fontSize: 25, fontWeight: "bold", color: "black", paddingTop: 55 }}>เเจ็ค สแปโร่</Text>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "gray", padding: 10 }}>25, ชาย</Text>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "gray" }}>โรคประจำตัว:  หอบหืด</Text>
                </View>
                <View style={styles.innerbox}>
                    <Image
                        style={styles.inner_pic}
                        source={images_profile.birthdate}
                    />
                    <Text style={styles.inner_big_text}>2 มีนาคม 2002</Text>
                </View>
                <View style={styles.innerbox}>
                    <Image
                        style={styles.inner_pic}
                        source={images_profile.location}
                    />
                    <Text style={styles.inner_big_text}>ท่าศาลา นครศรีธรรมราช,ไทย</Text>
                </View>
                <View style={styles.innerbox}>
                    <Image
                        style={styles.inner_pic}
                        source={images_profile.contact}
                    />
                    <Text style={styles.inner_big_text}>08x xxx xxxx</Text>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAF4FB",
        paddingBottom: 40
    },
    headerbox: {
        flexDirection: "row",
        height: 60,
        backgroundColor: "#2585C0",
        elevation: 20,
        shadowColor: '#52006A',
    },
    headertext: {
        fontSize: 17,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        paddingVertical: 14,
    },
    profile_pic: {
        width: 239,
        height: 239,
        top: 35,
        borderRadius: 100,
        paddingTop: -10
    },
    edit_pic: {
        width: 30,
        height: 30,
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
    inner_small_text: {
        fontSize: 10,
        fontWeight: "bold",
        color: "gray",

    },
    inner_pic: {
        width: 30,
        height: 30,
    }
});
export default Profile;