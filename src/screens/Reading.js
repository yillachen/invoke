import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import LottieView from 'lottie-react-native'
import starry_night from '../../assets/starry_night.json'
import Loading from './LoadScreen'

import {
  Colors,
  Container,
  Title,
  ReadingTitle,
  Text,
  Reset,
  ResetText,
  ReadingBox,
  ReadingName,
  Snippet,
  Tarot,
} from '../../styles'

// Colors Import
const { eggplant } = Colors

export default function Reading({ navigation, route }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
    return () => console.log('Unmounting...')
  }, [])

  if (loading) {
    return <Loading />
  }

  let firstCard = route.params.firstCard
  let secondCard = route.params.secondCard
  let thirdCard = route.params.thirdCard

  return (
    <LottieView style={styles.main} source={starry_night} autoPlay>
      <Container>
        <Title>Your Balanced Reading</Title>
        <ScrollView style={{ marginTop: 15, marginBottom: 15, height: `72%` }}>
          <ReadingBox>
            <Tarot source={firstCard.image} style={styles.tarot} />
            <ReadingTitle>Mind{'\n'}What I Think</ReadingTitle>
            <ReadingName>{firstCard.name}</ReadingName>
            <Snippet>{firstCard.words}</Snippet>
            {firstCard.description ? (
              <Text>{firstCard.description}</Text>
            ) : (
              <Text>Description to be added!</Text>
            )}
          </ReadingBox>

          <ReadingBox>
            <Tarot source={secondCard.image} style={styles.tarot} />
            <ReadingTitle>Body{'\n'}What I Feel</ReadingTitle>
            <ReadingName style={{ marginBottom: 10 }}>
              {route.params.secondCard.name}
            </ReadingName>
            <Snippet style={{ marginBottom: 10 }}>
              {route.params.secondCard.words}
            </Snippet>
            {secondCard.description ? (
              <Text>{secondCard.description}</Text>
            ) : (
              <Text>Description to be added!</Text>
            )}
          </ReadingBox>

          <ReadingBox>
            <Tarot source={thirdCard.image} style={styles.tarot} />
            <ReadingTitle>Spirit{'\n'}What I Do</ReadingTitle>
            <ReadingName>{thirdCard.name}</ReadingName>
            <Snippet style={{ marginBottom: 10 }}>{thirdCard.words}</Snippet>
            {thirdCard.description ? (
              <Text>{thirdCard.description}</Text>
            ) : (
              <Text>Description to be added!</Text>
            )}
          </ReadingBox>
        </ScrollView>
        <Reset onPress={() => navigation.goBack()}>
          <ResetText>Go Back</ResetText>
        </Reset>
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
  tarot: {
    zIndex: -1,
    opacity: 0.8,
    alignSelf: 'flex-end',
    marginBottom: -150,
    maxHeight: 150
  },
})
