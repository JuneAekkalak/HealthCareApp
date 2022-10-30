import * as React from 'react';
import { View, Text } from 'react-native';
export default function Page2({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 100, fontWeight: 'bold',color:'black'  }}>Page2</Text>
        </View>
    );
}