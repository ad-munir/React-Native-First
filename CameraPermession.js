import React from 'react'
import { Button, PermissionsAndroid, ToastAndroid } from 'react-native'

export const CameraPermession = () => {

    const OpenCameraPermession = async () => {

        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA, {
                title: 'the app needs camera permession',
                message: 'the app needs camera permession so you can take awesome photos',
                buttonNeutral: 'Ask me later',
                buttonNegative: 'Deny',
                buttonPositive: 'Accept'
            });

            if (granted === PermissionsAndroid.RESULTS.GRANTED)
                ToastAndroid.show('Permession ACCEPTED', ToastAndroid.SHORT);

            if (granted === PermissionsAndroid.RESULTS.DENIED)
                ToastAndroid.show('Permession DENIED', ToastAndroid.SHORT);

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <Button
            title="Open Camera"
            onPress={() => { OpenCameraPermession }}
        />
    )
}
