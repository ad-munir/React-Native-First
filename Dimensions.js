import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'

const useStyles = () => {

    const { height, width, scale, fontScale } = useWindowDimensions();

    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            flex: 1
        },
        left: {
            backgroundColor: "pink",
            width: width > 400 ? 200: 100
        },
        right: {
            backgroundColor: "skyblue",
            flex: 1
        }
    });
}

const Dimensions = () => {

    const styles = useStyles();

    return (
        <View style={styles.container} >
            <View style={styles.left} ></View>
            <View style={styles.right} ></View>
        </View>
    )
}

export default Dimensions