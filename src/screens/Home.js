import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import LottieView from 'lottie-react-native'
import cards from '../../assets/cardsIndex'
import starry_night from '../../assets/starry_night.json'
import card_back from '../../assets/cards/card-back.png'
import Loading from './LoadScreen'

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
} from '../../styles'

// Colors Import
const { eggplant } = Colors

export default function Home({ navigation }) {
  const [firstCard, setFirstCard] = useState(card_back)
  const [secondCard, setSecondCard] = useState(card_back)
  const [thirdCard, setThirdCard] = useState(card_back)
  const [loading, setLoading] = useState(true)

  const [revealOne, setRevealOne] = useState(false)

  // picks a random key in cards object
  function randomize(obj) {
    var keys = Object.keys(obj)
    return obj[keys[(keys.length * Math.random()) << 0]]
  }

  useEffect(() => {
    setLoading(false)
    return () => console.log('Unmounting...')
  }, [])

  // reveal cards
  const onPress = () => {
    setFirstCard(randomize(cards))
    setSecondCard(randomize(cards))
    setThirdCard(randomize(cards))
  }

  if (loading) {
    return <Loading />
  }

  return (
    <LottieView style={styles.main} source={starry_night} autoPlay>
      <Container>
        <View>
          <Title>Invoke</Title>
          <Italic>
            Draw a 3-card balanced spread to dive into Mind, Body and Spirit.
            {'\n'}In this layout, each card of the spread has a common
            intersection. They are all equally important, like three sides of a
            pyramid. Without any of these, the whole structure collapses.
          </Italic>
        </View>
        <TopCard>
          <Card>
            <Tarot source={firstCard} />
          </Card>
        </TopCard>

        <View>
          <Button onPress={onPress}>
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
