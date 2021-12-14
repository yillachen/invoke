import React, { useState, useEffect, useRef } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import cards from '../../assets/cardsIndex'
import card_back from '../../assets/cards/card-back.png'
import Loading from '../screens/LoadScreen'
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
  Reset, ResetText
} from '../../styles'

// Colors Import
const { eggplant } = Colors

export default function Cards() {
  const [firstCard, setFirstCard] = useState(card_back)
  const [secondCard, setSecondCard] = useState(card_back)
  const [thirdCard, setThirdCard] = useState(card_back)
  const [loading, setLoading] = useState(true)
  const [showHowto, setHowto] = useState(false)

  // fade in instructions

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
    <Container>
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
          bottom: `30%`,
          alignSelf: 'center',
          flexDirection: 'row',
        }}
      >
        <Reset onPress={reset}>
          <ResetText>Reset</ResetText>
        </Reset>
      </View>
    </Container>
  )
}
