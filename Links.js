import React from 'react'
import { Button, Linking } from 'react-native'

const Links = () => {
    return (
        <>
            <Button
                title="Open mail"
                onPress={() => Linking.openURL("mailto: monirayad@gmail.com").catch( (error) => console.log(console.error()) )}
            />
            <Button
                title="Open phone"
                onPress={() => Linking.openURL("tel: +212 6 02 11 52 14")}
            />
            <Button
                title="Open sms"
                onPress={() => Linking.openURL("sms: +212 6 02 11 52 14")}
            />
            <Button
                title="Open URL"
                onPress={() => Linking.openURL("https://reactnative.dev/docs/linking?language=javascript")}
            />
            
        </>
    )
}

export default Links