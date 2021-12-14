import React, { useState, useEffect, useRef } from 'react'
import { View, StyleSheet, Image, Animated } from 'react-native'
import LottieView from 'lottie-react-native'
import cards from '../../assets/cardsIndex'
import starry_night from '../../assets/starry_night.json'
import card_back from '../../assets/cards/card-back.png'
import Loading from './LoadScreen'
import About from '../modals/About'

import {
  Colors,
  Button,
  ButtonText,
  Card,
  Container,
  Tarot,
  Rotated,
  TopCard,
  Title,
  Italic,
  Reset,
  ResetText,
} from '../../styles'

// Colors Import
const { eggplant } = Colors

export default function Home({ navigation }) {
  const [firstCard, setFirstCard] = useState(card_back)
  const [secondCard, setSecondCard] = useState(card_back)
  const [thirdCard, setThirdCard] = useState(card_back)
  const [loading, setLoading] = useState(true)
  const [showHowto, setHowto] = useState(false)

  // flip card animation
  const flipAnimation = useRef(new Animated.Value(0)).current
  let flipRotation = 0
  flipAnimation.addListener(({ value }) => (flipRotation = value))
  const flipToFrontStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  }
  const flipToBackStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  }

  // picks a random key in cards object
  function randomize(obj) {
    var keys = Object.keys(obj)
    return obj[keys[(keys.length * Math.random()) << 0]]
  }

  useEffect(() => {
    setLoading(false)
    return () => console.log('Unmounting...')
  }, [])

  // reveal cards one by one
  const flipCards = () => {
    if (firstCard === 77) {
      setFirstCard(randomize(cards))
    } else if (firstCard !== 77 && secondCard === 77) {
      setSecondCard(randomize(cards))
    } else if (firstCard !== 77 && secondCard !== 77 && thirdCard === 77) {
      setThirdCard(randomize(cards))
    } else {
      alert('All cards are revealed. 🔮')
    }
  }

  // reset cards
  const reset = () => {
    setFirstCard(card_back)
    setSecondCard(card_back)
    setThirdCard(card_back)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <LottieView style={styles.main} source={starry_night} autoPlay>
      <Container>
        <View>
          <Title>Invoke</Title>
          {showHowto ? <About /> : <></>}
        </View>
        <TopCard>
          <Card>
            <Tarot source={firstCard} />
          </Card>
        </TopCard>

        <View>
          <Button onPress={flipCards}>
            <ButtonText>Reveal</ButtonText>
          </Button>
        </View>

        <Rotated>
          <Card style={{ transform: [{ rotate: '22.5deg' }] }}>
            <Tarot source={secondCard} />
          </Card>
          <Card style={{ transform: [{ rotate: '-22.5deg' }] }}>
            <Tarot source={thirdCard} />
          </Card>
        </Rotated>

        <View
          style={{
            position: 'absolute',
            bottom: `28%`,
            alignSelf: 'center',
            flexDirection: 'row',
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

          <Reset onPress={reset}>
            <ResetText>Reset</ResetText>
          </Reset>
        </View>
      </Container>
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
