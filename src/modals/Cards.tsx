import React, { useState, useEffect } from 'react'
import { View, Modal } from 'react-native'
import cards from '../../assets/cardsIndex'
import Loading from '../screens/LoadScreen'

import {
  Button,
  Card,
  Container,
  Tarot,
  Rotated,
  TopCard,
  Reset,
  ResetText,
  Description,
  Italic,
  Title,
} from '../../styles'

export default function Cards(navigation) {
  const [loading, setLoading] = useState(true)
  const [firstCard, setFirstCard] = useState(cards.Default)
  const [secondCard, setSecondCard] = useState(cards.Default)
  const [thirdCard, setThirdCard] = useState(cards.Default)
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

      {/* Buttons */}
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          paddingTop: 100
        }}
      >
        {firstCard !== cards.Default &&
        secondCard !== cards.Default &&
        thirdCard !== cards.Default &&
        !showModal3 ? (
          <Reset
            onPress={() =>
              navigation.navigate('Reading', {
                firstCard: firstCard,
                secondCard: secondCard,
                thirdCard: thirdCard,
              })
            }
          >
            <ResetText>Go to Reading</ResetText>
          </Reset>
        ) : (
          <Reset onPress={flipCards}>
            <ResetText>Reveal</ResetText>
          </Reset>
        )}

        <Reset onPress={reset}>
          <ResetText>Reset</ResetText>
        </Reset>
      </View>

      {/* First Card Modal */}
      <Modal animationType={'fade'} transparent={true} visible={showModal1}>
        <Description
          style={{
            height: '30%',
            marginTop: 'auto',
          }}
        >
          <Button
            onPress={() => setModal1(false)}
            style={{
              alignSelf: 'flex-end',
            }}
          >
            <Italic>Close</Italic>
          </Button>

          <Title style={{ marginBottom: 15 }}>{firstCard.name}</Title>
          {firstCard.words ? (
            <Italic style={{ marginBottom: 15 }}>
              This card invokes {'\n'}
              {firstCard.words}
            </Italic>
          ) : (
            <Italic>Description coming soon!</Italic>
          )}
        </Description>
      </Modal>

      {/* Second Card Modal  */}
      <Modal animationType={'fade'} transparent={true} visible={showModal2}>
        <Description
          style={{
            height: '30%',
            marginTop: 'auto',
          }}
        >
          <Button
            onPress={() => setModal2(false)}
            style={{
              alignSelf: 'flex-end',
            }}
          >
            <Italic>Close</Italic>
          </Button>

          <Title style={{ marginBottom: 15 }}>{secondCard.name}</Title>
          {secondCard.words ? (
            <Italic style={{ marginBottom: 15 }}>
              This card invokes {'\n'} {secondCard.words}
            </Italic>
          ) : (
            <Italic>Description coming soon!</Italic>
          )}
        </Description>
      </Modal>

      {/* Third Card Modal */}
      <Modal animationType={'fade'} transparent={true} visible={showModal3}>
        <Description
          style={{
            height: '30%',
            marginTop: 'auto',
          }}
        >
          <Button
            onPress={() => setModal3(false)}
            style={{
              alignSelf: 'flex-end',
            }}
          >
            <Italic>Close</Italic>
          </Button>
          <Title style={{ marginBottom: 15 }}>{thirdCard.name}</Title>

          {thirdCard.words ? (
            <Italic style={{ marginBottom: 15 }}>
              This card invokes{'\n'}
              {thirdCard.words}
            </Italic>
          ) : (
            <Italic>Description coming soon!</Italic>
          )}
        </Description>
      </Modal>
    </Container>
  )
}
