import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import cards from '../../assets/cardsIndex';

export default function Home({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View>
      <Image source={cards.Chariot} />
    </View>
  )
}
