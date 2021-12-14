import styled, { css } from '@emotion/native'

// Branded Colors
export const Colors = {
  eggplant: '#18020C',
  mauve: '#634B66',
  lavender: '#9590A8',
  silver: '#BBCBCB',
}
const { eggplant, mauve, lavender, silver } = Colors

// Shared Components
export const Button = styled.TouchableOpacity`
  border-radius: 100px;
  background-color: ${mauve};
  width: 100px;
  height: 100px;
  align-self: center;
  justify-content: center;
  box-shadow: 1px 1px 5px ${mauve};
`

export const ButtonText = styled.Text`
  color: ${silver};
  text-align: center;
`

export const Card = styled.View`
  border: 1px solid #000;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
`

export const Tarot = styled.Image`
  max-width: 100px;
  max-height: 175px;
`

export const Container = styled.View`
  padding: 25px;
  display: flex;
  justify-content: space-between;
`

export const Text = styled.Text`
  color: ${silver};
  font-size: 15px;
  text-align: center;
  line-height: 20px;
`

export const Title = styled.Text`
  color: ${silver};
  font-size: 21px;
  text-align: center;
  line-height: 30px;
`

export const Rotated = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5px 0 5px;
`

export const TopCard = styled.View`
  align-self: center;
  padding: 15px;
`
