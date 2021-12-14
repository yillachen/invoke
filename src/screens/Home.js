import React, { useState } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import LottieView from 'lottie-react-native'
import cards from '../../assets/cardsIndex'
import starry_night from '../../assets/starry_night.json'
import {
  Colors,
  Button,
  ButtonText,
  Card,
  Container,
  Tarot,
  Text,
  Rotated,
  TopCard,
  Title,
} from '../../styles'
import { useFonts } from 'expo-font'

// Colors Import
const { eggplant } = Colors

export default function Home({ navigation }) {
  const [loaded] = useFonts({
    Tiempos: require('../..//assets/fonts/TiemposFine-Light.otf'),
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onPress = () => {
    console.log('Clicked on the first button')
  }

  return (
    <>
      <StatusBar style="light-content" />
      <LottieView
        style={styles.main}
        resizeMode="cover"
        source={starry_night}
        autoPlay
      >
        <Container>
          <View>
            <Title>Invoke</Title>
            <Text>
              Reveal a 3-card balanced spread. In this layout, each card of the
              spread has a common intersection. They are all equally important,
              like three sides of a pyramid. Without any of these, the whole
              structure collapses.
            </Text>
          </View>
          <TopCard>
            <Card>
              <Tarot source={cards.Chariot} />
            </Card>
          </TopCard>

          <View>
            <Button onPress={onPress}>
              <ButtonText>Reveal</ButtonText>
            </Button>
          </View>

          <Rotated>
            <Card style={{ transform: [{ rotate: '22.5deg' }] }}>
              <Tarot source={cards.Death} />
            </Card>
            <Card style={{ transform: [{ rotate: '-22.5deg' }] }}>
              <Tarot source={cards.Tower} />
            </Card>
          </Rotated>
        </Container>
      </LottieView>
    </>
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
