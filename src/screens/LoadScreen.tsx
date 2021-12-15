import React from 'react'
import { Image, StyleSheet } from 'react-native'
import shuffle from '../../assets/shuffling.gif'
import starry_night from '../../assets/starry_night.json'
import LottieView from 'lottie-react-native'
import { Colors, Container, Title } from '../../styles'

const { eggplant } = Colors

export default function Loading() {
  return (
    <LottieView style={styles.main} source={starry_night} autoPlay>
      <Container style={{ top: `15%` }}>
        <Title>Loading Invoke...</Title>
        <Image
          source={shuffle}
          style={{ height: 350, width: 350, alignSelf: 'center' }}
        />
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
