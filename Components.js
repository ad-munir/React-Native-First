import React from 'react'
import { ActivityIndicator, Alert, Button, StyleSheet, View } from 'react-native';

export const Components = () => {

    const handleAlert = () => {
        Alert.alert(
            "alert title",
            "alert message ...",
            [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: "cancel", // for IOS
                },
                {
                    text: 'Ok',
                    onPress: () => console.log('ok'),
                    style: "destructive" // for IOS
                }
            ]
        )
    }
    return (
        <View>
            <ActivityIndicator animating={true} size={"large"} color={"red"} />
            <Button title='Alert' onPress={handleAlert} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#eaeaea',
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },

    card: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#61dafb',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },

    old: {
        justifyContent: 'center',
        backgroundColor: '#000',
        color: "#fff",
        height: "100%",
        padding: 20,
    }
});