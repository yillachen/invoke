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
  align-self: center;
  justify-content: center;
  margin: 10px 0 10px 0;
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
  box-shadow: 1px 1px 3px ${lavender};
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
  width: 100px;
  height: 175px;
`

export const AboutCard = styled.View`
  align-self: center;
  padding: 30px;
  width: 325px;
  border: 1px solid ${white};
  background-color: ${eggplant};
  border-radius: 10px;
  position: absolute;
  top: 200px;
`

export const Container = styled.View`
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  z-index: -1;
  align-items: stretch;
  top: 8%;
`

export const Text = styled.Text`
  color: ${white};
  font-size: 18px;
  text-align: center;
  line-height: 25px;
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
  margin-bottom: 15px;
`

export const ReadingTitle = styled.Text`
  color: ${white};
  font-size: 23px;
  text-align: left;
  font-family: 'Tiempos';
  letter-spacing: 0.5px;
  margin-bottom: 15px;
  text-transform: uppercase;
  align-self: flex-start;
`

export const ReadingName = styled.Text`
  color: ${white};
  font-size: 20px;
  font-family: 'Tiempos';
  letter-spacing: 0.5px;
  margin-bottom: 15px;
  align-self: flex-start;
  text-align: left;
`

export const Snippet = styled.Text`
  color: ${white};
  font-size: 18px;
  font-family: 'Tiempos_Italic';
  letter-spacing: 0.5px;
  margin-bottom: 15px;
  align-self: flex-start;
  text-align: left;
  width: 60%;
  line-height: 25px;
`

export const ReadingBox = styled.View`
  border: 1px solid ${mauve};
  padding: 18px;
  margin: 10px 0 10px 0;
  border-radius: 10px;
  background-color: ${mauve};
  box-shadow: 1px 1px 3px ${lavender};
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

export const Description = styled.View`
  padding: 25px;
  border: 1px solid ${lavender};
  border-radius: 10px;
  background-color: ${eggplant};
  font-family: 'Tiempos';
  font-size: 15px;
  color: ${white};
  width: 100%;
`
