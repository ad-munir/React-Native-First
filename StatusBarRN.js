import React, { useState } from 'react'
import { Button, StatusBar, Text, View } from 'react-native'

const StatusBarRN = () => {

    const [hidden, setHidden] = useState(false);
    return (
        <>
            <StatusBar backgroundColor={"#f00"}  animated={true} barStyle={"dark-content"} />
            <View style={{ borderWidth: 1, padding:10, gap:10 }}>
                <Button
                    title="Blue background"
                    color={"blue"}
                    onPress={() => StatusBar.setBackgroundColor("blue")}
                />

                <Button
                    title="Gold background"
                    color={"gold"}
                    onPress={() => StatusBar.setBackgroundColor("gold")}
                />
            </View>

            <View style={{ borderWidth: 1, padding:10, gap:10 }}>
                <Button
                    title="Light content"
                    color={"#eee"}
                    onPress={() => StatusBar.setBarStyle('light-content')}
                />
                <Button
                    title="Dark content"
                    color={"#000"}
                    onPress={() => StatusBar.setBarStyle('dark-content')}
                />
            </View>

            <View style={{ borderWidth: 1, padding:10, gap:10 }}>
                <Button
                    title={hidden ? 'hide': 'show'}
                    color={hidden ? 'red': 'green'}
                    onPress={() => {
                        setHidden(!hidden);
                        StatusBar.setHidden(hidden);
                    }}
                />
                
            </View>
            
        </>
    )
}

export default StatusBarRN