import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView,TouchableOpacity } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const Date = () => {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerbox}>
                <Text style={styles.headertext}>Health Record</Text>
            </View>
            <View style={styles.carlendar}>
                <Calendar></Calendar>
            </View>
            <TouchableOpacity style={styles.todobox}>
                <Text style={styles.todotext}>มีไข้, ไอ, คลื่นไส้</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAF4FB",
    },
    headerbox: {
        height: 60,
        backgroundColor: "#2585C0",
        elevation: 20,
        shadowColor: '#52006A',
    },
    headertext: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        paddingVertical: 20,
    },
    carlendar: {
        margin: 28,
        marginTop: 35,
        elevation: 10,
        shadowColor: '#52006A',
    },
    todobox: {
        backgroundColor: "#FFFFFF",
        height: 65,
        margin: 20,
        marginTop: 0,
        marginLeft: "5%",
        borderRadius: 15,
        elevation: 10,
        shadowColor: '#52006A',
    },
    todotext: {
        fontSize: 17,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        paddingVertical: 20,

    }
})

export default Date;

