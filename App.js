import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Alert, BackHandler, Button, DrawerLayoutAndroid, PermissionsAndroid, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { CameraPermession } from './CameraPermession';
import { Components } from './Components';
import { Animation } from './Animation';

export default function App() {

  const [drawerPosition, setDrawerPosition] = useState("left");
  const drawerRef = useRef(null);

  useEffect(() => {

    const exitHandler = () => {
      Alert.alert(
        "Exit Alert",
        "Are you sure you want to exit ?",
        [
          {
            text: "Cancel",
            onPress: () => null,
            // style: "cancel"
          },
          {
            text: "Ok",
            onPress: () => BackHandler.exitApp(),
            // style: "destructive"
          }
        ]
      )

      return true;
    }

    const backHandler = BackHandler.addEventListener('hardwareBackPress', exitHandler);
    return () => backHandler.remove();
  }, []);


  
  return (
    <>
      <DrawerLayoutAndroid
        ref={drawerRef}
        renderNavigationView={() =>
          <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
            <Text style={styles.title}>Drawer</Text>
            <Button title='close Drawer' onPress={() => drawerRef.current.closeDrawer()} />
          </View>
        }

        drawerPosition={drawerPosition}
        drawerWidth={350}
        drawerBackgroundColor={"#eee"}
      >
        <View style={{ flex: .5, paddingHorizontal: 70, justifyContent: "center", gap: 10 }}>
          <Button
            title="Change position"
            onPress={() => {
              drawerPosition === 'left' ? setDrawerPosition('right') : setDrawerPosition('left')
            }}
          />
          <Button
            title="Open drawer"
            onPress={() => {
              drawerRef.current.openDrawer()
            }}
          />
          
          <Button title='open Toast' onPress={() => ToastAndroid.show('you clicked me!', ToastAndroid.SHORT)} />
          
          <Components/>
          <Animation />

        </View>
      </DrawerLayoutAndroid>
    </>

  );
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