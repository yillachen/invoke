import React, { useState, useEffect } from 'react'
import { View, ScrollView, Modal } from 'react-native'
import cards from '../../assets/cardsIndex'
import Loading from '../screens/LoadScreen'

import {
  Button,
  ButtonText,
  Card,
  Container,
  Tarot,
  Rotated,
  TopCard,
  Reset,
  ResetText,
  Description,
  Text,
  Italic,
  Title,
} from '../../styles'

export default function Cards() {
  const [firstCard, setFirstCard] = useState(cards.Default)
  const [secondCard, setSecondCard] = useState(cards.Default)
  const [thirdCard, setThirdCard] = useState(cards.Default)
  const [loading, setLoading] = useState(true)
  const [showModal1, setModal1] = useState(false)
  const [showModal2, setModal2] = useState(false)
  const [showModal3, setModal3] = useState(false)

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
    if (firstCard === cards.Default) {
      setFirstCard(randomize(cards))
      setModal1(true)
    } else if (firstCard !== cards.Default && secondCard === cards.Default) {
      setSecondCard(randomize(cards))
      setModal2(true)
    } else if (
      firstCard !== cards.Default &&
      secondCard !== cards.Default &&
      thirdCard === cards.Default
    ) {
      setThirdCard(randomize(cards))
      setModal3(true)
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

  return (
    <Container>
      <TopCard>
        <Card>
          <Tarot source={firstCard.image} />
        </Card>
      </TopCard>

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
        <Reset onPress={flipCards}>
          <ResetText>Reveal</ResetText>
        </Reset>
        <Reset onPress={reset}>
          <ResetText>Reset</ResetText>
        </Reset>
      </View>

      {/* First Card Modal */}
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={showModal1}
        onRequestClose={() => {
          setModal1(false)
        }}
      >
        <Description
          style={{
            height: '70%',
            marginTop: 'auto',
          }}
        >
          <Button
            onPress={() => setModal1(false)}
            style={{
              border: 0,
              backgroundColor: 'transparent',
              height: 40,
              alignSelf: 'flex-end',
            }}
          >
            <Italic>Close</Italic>
          </Button>

          <ScrollView>
            <Title style={{ marginBottom: 15 }}>{firstCard.name}</Title>

            {firstCard.description ? (
              <Italic style={{ marginBottom: 15 }}>{firstCard.words}</Italic>
            ) : (
              <></>
            )}

            {firstCard.description ? (
              <Text>{firstCard.description}</Text>
            ) : (
              <Text>Description coming soon!</Text>
            )}
          </ScrollView>
        </Description>
      </Modal>

      {/* Second Card Modal  */}
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={showModal2}
        onRequestClose={() => {
          setModal2(false)
        }}
      >
        <Description
          style={{
            height: '70%',
            marginTop: 'auto',
          }}
        >
          <Button
            onPress={() => setModal2(false)}
            style={{
              border: 0,
              backgroundColor: 'transparent',
              height: 40,
              alignSelf: 'flex-end',
            }}
          >
            <Italic>Close</Italic>
          </Button>

          <ScrollView>
            <Title style={{ marginBottom: 15 }}>{secondCard.name}</Title>

            {secondCard.description ? (
              <Italic style={{ marginBottom: 15 }}>{secondCard.words}</Italic>
            ) : (
              <></>
            )}

            {secondCard.description ? (
              <Text>{secondCard.description}</Text>
            ) : (
              <Text>Description coming soon!</Text>
            )}
          </ScrollView>
        </Description>
      </Modal>

      {/* Third Card Modal */}
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={showModal3}
        onRequestClose={() => {
          setModal3(false)
        }}
      >
        <Description
          style={{
            height: '70%',
            marginTop: 'auto',
          }}
        >
          <Button
            onPress={() => setModal3(false)}
            style={{
              border: 0,
              backgroundColor: 'transparent',
              height: 40,
              alignSelf: 'flex-end',
            }}
          >
            <Italic>Close</Italic>
          </Button>

          <ScrollView>
            <Title style={{ marginBottom: 15 }}>{thirdCard.name}</Title>

            {thirdCard.description ? (
              <Italic style={{ marginBottom: 15 }}>{thirdCard.words}</Italic>
            ) : (
              <></>
            )}

            {thirdCard.description ? (
              <Text>{thirdCard.description}</Text>
            ) : (
              <Text>Description coming soon!</Text>
            )}
          </ScrollView>
        </Description>
      </Modal>
    </Container>
  )
}
