import styled, { css } from '@emotion/native'

// Branded Colors
export const Colors = {
  eggplant: '#18020C',
  mauve: '#634B66',
  lavender: '#9590A8',
  white: '#fff',
}
const { eggplant, mauve, lavender, white } = Colors

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
  color: ${white};
  text-align: center;
  font-family: 'Tiempos';
  font-size: 21px;
  letter-spacing: 0.5px;
`

export const Reset = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: ${lavender};
  box-shadow: 1px 1px 5px ${lavender};
  padding: 10px 15px 10px 15px;
  margin: 0 25px 0 25px;
`

export const ResetText = styled.Text`
  color: ${eggplant};
  text-align: center;
  font-family: 'Tiempos_Italic';
  font-size: 21px;
  letter-spacing: 0.5px;
`

export const Card = styled.View`
  border: 1px solid #000;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${mauve};
`

export const Tarot = styled.Image`
  max-width: 100px;
  max-height: 175px;
`

export const Container = styled.View`
  padding: 50px 25px 25px 25px;
  display: flex;
  justify-content: space-between;
`

export const Text = styled.Text`
  color: ${white};
  font-size: 18px;
  text-align: center;
  line-height: 20px;
  font-family: 'Tiempos';
  letter-spacing: 0.5px;
`

export const Italic = styled.Text`
  color: ${white};
  font-size: 18px;
  text-align: center;
  line-height: 20px;
  font-family: 'Tiempos_Italic';
  letter-spacing: 0.5px;
`

export const Title = styled.Text`
  color: ${white};
  font-size: 30px;
  text-align: center;
  line-height: 40px;
  font-family: 'Tiempos';
  letter-spacing: 0.5px;
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
