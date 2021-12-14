import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native'
import LottieView from 'lottie-react-native'
import cards from '../../assets/cardsIndex'
import starry_night from '../../assets/starry_night.json'
import card_back from '../../assets/cards/card-back.png'
import Loading from './LoadScreen'
import About from '../modals/About'
import Cards from '../modals/Cards'
import show from '../../assets/icons/show.png'
import hide from '../../assets/icons/hide.png'

import { Colors, Title } from '../../styles'

// Colors Import
const { eggplant } = Colors

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(true)
  const [showHowto, setHowto] = useState(false)

  useEffect(() => {
    setLoading(false)
    return () => console.log('Unmounting...')
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <LottieView style={styles.main} source={starry_night} autoPlay>
      <View style={{ paddingTop: `20%` }}>
        <Title>Invoke</Title>

        <View
          style={{
            position: 'absolute',
            top: 75,
            left: 15,
          }}
        >
          {showHowto ? (
            <TouchableOpacity onPress={() => setHowto(false)}>
              <Image style={{ height: 50, width: 50 }} source={hide} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setHowto(true)}>
              <Image style={{ height: 50, width: 50 }} source={show} />
            </TouchableOpacity>
          )}
        </View>

        {showHowto ? <About /> : <></>}
      </View>
      <Cards />
    </LottieView>
  )
}

// creates the animated background
const styles = StyleSheet.create({
  main: {
    backgroundColor: eggplant,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
})
