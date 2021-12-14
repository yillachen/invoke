import "react-native-gesture-handler";
import React from "react";
import { useFonts } from 'expo-font'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/screens";
import { decode, encode } from "base-64";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Tiempos: require('./assets/fonts/TiemposFine-Light.otf'),
    Tiempo_Italic: require('./assets/fonts/TiemposFine-LightItalic.otf')
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} {...loaded} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
