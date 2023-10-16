import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const Animation = () => {

    const animatedValue = useRef(new Animated.Value(0)).current;

    const animatedValue1 = useRef(new Animated.Value(0)).current;
    const animatedValue2 = useRef(new Animated.Value(0)).current;
    const sum = Animated.add(animatedValue1, animatedValue2);

    useEffect(() => {
        Animated.timing(animatedValue1, {
            toValue: 50,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        Animated.timing(animatedValue2, {
            toValue: 100,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, [animatedValue1, animatedValue2])

    const pressHandler = () => {
        // Animated.decay(animatedValue, {
        //     velocity: .5,
        //     deceleration: .997,
        //     useNativeDriver: true
        // }).start();

        // Animated.spring(animatedValue, {
        //     toValue: 100,
        //     friction: 7,
        //     tension: 40,
        //     useNativeDriver: true,
        // }).start();
    }

    // useEffect(() => {
    //     Animated.timing(animatedValue, {
    //         toValue: 1,
    //         duration: 3000,
    //         useNativeDriver: true,
    //         delay: 1000
    //     }).start();
    // }, [animatedValue])


    return (
        <>

            {/* Animated.decay */}
            {/* <TouchableOpacity onPress={pressHandler}>
                <Text style={styles.button}> start animation</Text>
                <View>
                    <Animated.View style={[styles.card, {
                        transform: [{ translateX: animatedValue }]
                    }]} />
                </View>
            </TouchableOpacity> */}

            {/* Animated.timing */}
            {/* <Animated.View style={[styles.card, {
                opacity: animatedValue
            }]} /> */}

            {/* Animated.spring */}
            {/* <TouchableOpacity onPress={pressHandler}>
                <Text style={styles.button}> start animation</Text>
            </TouchableOpacity>
            <Animated.View style={[styles.card, {
                transform: [{ translateX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 50]
                }) }]
            }]} /> */}

            <Animated.View style={[styles.card, {
                transform: [{ translateX: animatedValue }]
            }]} />


        </>

    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#eaeaea',
    },
    button: {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5
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
        height: 80,
        width: 100,
    },

    old: {
        justifyContent: 'center',
        backgroundColor: '#000',
        color: "#fff",
        height: "100%",
        padding: 20,
    }
});