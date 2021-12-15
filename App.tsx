import 'react-native-gesture-handler'
import React, { createElement } from 'react'
import { useFonts } from 'expo-font'
import { decode, encode } from 'base-64'
import { MainStack } from './index'

if (!global.btoa) {
  global.btoa = encode
}
if (!global.atob) {
  global.atob = decode
}

export default function App() {
  const [loaded] = useFonts({
    Tiempos: require('./assets/fonts/Tiempos.otf'),
    Tiempos_Italic: require('./assets/fonts/TiemposItalic.otf'),
  })

  if (loaded) {
    return createElement(MainStack, { loaded: loaded })
  } else {
    return <></>
  }
}
