import React, { useState, useEffect, useRef } from 'react'
import { View, Animated, Modal, Text } from 'react-native'
import cards from '../../assets/cardsIndex'
import Loading from '../screens/LoadScreen'

import {
  Colors,
  Button,
  ButtonText,
  Card,
  Container,
  Tarot,
  Rotated,
  TopCard,
  Reset,
  ResetText,
} from '../../styles'

// Colors Import
const { eggplant } = Colors

export default function Cards() {
  const [firstCard, setFirstCard] = useState(cards.Default)
  const [secondCard, setSecondCard] = useState(cards.Default)
  const [thirdCard, setThirdCard] = useState(cards.Default)
  const [loading, setLoading] = useState(true)
  const [showModal, setModal] = useState(false)

  // picks a random key in cards object
  function randomize(obj) {
    var keys = Object.keys(obj);
    return obj[keys[(keys.length * Math.random()) << 0]]
  }

  useEffect(() => {
    setLoading(false)
    return () => console.log('Unmounting...')
  }, [])

  // reveal cards one by one
  const flipCards = () => {
    if (firstCard === cards.Default) {
      setFirstCard(randomize(cards))
      // setModal(true)
    } else if (firstCard !== cards.Default && secondCard === cards.Default) {
      setSecondCard(randomize(cards))
    } else if (firstCard !== cards.Default && secondCard !== cards.Default && thirdCard === cards.Default) {
      setThirdCard(randomize(cards))
    } else {
      alert('All cards are revealed. 🔮')
    }
  }

  // reset cards
  const reset = () => {
    setFirstCard(cards.Default)
    setSecondCard(cards.Default)
    setThirdCard(cards.Default)
  }

  if (loading) {
    return <Loading />
  }

  console.log('ONE', firstCard)
  console.log('TWO', secondCard)
  console.log('THREE', thirdCard)

  return (
    <Container>
      <TopCard>
        <Card>
          <Tarot source={firstCard.image} />
        </Card>
      </TopCard>

      <View>
        <Button onPress={flipCards}>
          <ButtonText>Reveal</ButtonText>
        </Button>
      </View>

      <Rotated>
        <Card style={{ transform: [{ rotate: '22.5deg' }] }}>
          <Tarot source={secondCard.image} />
        </Card>
        <Card style={{ transform: [{ rotate: '-22.5deg' }] }}>
          <Tarot source={thirdCard.image} />
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
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={showModal}
        onRequestClose={() => {
          setModal(false)
        }}
      >
        <Text style={{ color: `${eggplant}` }}>{firstCard.description}</Text>
        <Button onPress={() => setModal(false)}><ButtonText>Close</ButtonText></Button>
      </Modal>
    </Container>
  )
}
