import React, { useState } from 'react'
import { ActionSheetIOS, Button, StyleSheet, Text, View } from 'react-native'

export const IOSspecific = () => {

    const [result, setResult] = useState("start");
    const pressHandler = () => {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ["Cancel", "Generate number", "Reset"],
                cancelButtonIndex: 0,
                destructiveButtonIndex: 2
            },
            (buttonIdx) => {
                if (buttonIdx === 0){
                    // cancel action
                } else if (buttonIdx === 1) {
                    setResult(String(Math.floor(Math.random() * 100)));
                } else if (buttonIdx === 2) {
                    setResult("start");
                } 
            }
        )
    }

    return (
        <View >
            <Text style={styles.title} >{result}</Text>
            <Button title='Show Action Sheet' onPress={pressHandler} />
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