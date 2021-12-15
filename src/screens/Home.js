import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import LottieView from 'lottie-react-native'
import starry_night from '../../assets/starry_night.json'
import Loading from './LoadScreen'
import Cards from '../modals/Cards'
import show from '../../assets/icons/show.png'
import hide from '../../assets/icons/hide.png'

import {
  Colors,
  Title,
  AboutCard,
  Text,
  Button,
  Italic,
  Container,
} from '../../styles'

// Colors Import
const { eggplant } = Colors

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(true)
  const [showHowto, setHowto] = useState(false)

  useEffect(() => {
    setLoading(false)
    return () => console.log('Unmounting...')
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <LottieView style={styles.main} source={starry_night} autoPlay>
      <Container>
        <Title>Invoke</Title>

        <View
          style={{
            position: 'absolute',
            top: 15,
            left: 15,
          }}
        >
          {showHowto ? (
            <Image style={{ height: 50, width: 50 }} source={hide} />
          ) : (
            <TouchableOpacity onPress={() => setHowto(true)}>
              <Image style={{ height: 50, width: 50 }} source={show} />
            </TouchableOpacity>
          )}
        </View>

        <Modal animationType={'fade'} transparent={true} visible={showHowto}>
          <AboutCard>
            <Button
              onPress={() => setHowto(false)}
              style={{
                alignSelf: 'flex-end',
                zIndex: 1,
              }}
            >
              <Italic>Close</Italic>
            </Button>
            <Title style={{ marginBottom: 15, marginTop: -40 }}>How To</Title>
            <Text>
              Invoke draws a 3-card balanced spread to evaluate your 1.
              Physical, 2. Emotional, and 3. Spiritual State. You can also view
              them as what you think, feel and will do.
              {'\n'}
              {'\n'}
              In this layout, each card of the spread has a common intersection,
              without each other the connection collapses.
            </Text>
          </AboutCard>
        </Modal>
      </Container>
      <Cards {...navigation} />
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
