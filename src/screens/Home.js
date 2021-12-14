import React, { useState, useEffect, useRef } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import LottieView from 'lottie-react-native'
import cards from '../../assets/cardsIndex'
import starry_night from '../../assets/starry_night.json'
import card_back from '../../assets/cards/card-back.png'
import Loading from './LoadScreen'
import About from '../modals/About'
import Cards from '../modals/Cards'

import { Colors, Title, Reset, ResetText } from '../../styles'

// Colors Import
const { eggplant } = Colors

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(true)
  const [showHowto, setHowto] = useState(false)

  // fade in instructions

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
        {showHowto ? <About /> : <></>}
      </View>
      <Cards />
      <View
        style={{
          position: 'absolute',
          top: `10%`,
          left: 5,
        }}
      >
        {showHowto ? (
          <Reset onPress={() => setHowto(false)}>
            <ResetText>Hide</ResetText>
          </Reset>
        ) : (
          <Reset onPress={() => setHowto(true)}>
            <ResetText>How-To</ResetText>
          </Reset>
        )}
      </View>
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
