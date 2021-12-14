import React from 'react'
import { Italic, AboutCard } from '../../styles'

export default function About() {
  return (
    <AboutCard>
      <Italic>
        Draw a 3-card balanced spread to dive into Mind, Body and Spirit.
        {'\n'}{'\n'}
        In this layout, each card of the spread has a common intersection.{'\n'}{'\n'}
        They are all equally important, like three sides of a pyramid. Without
        any of these, the whole structure collapses.
      </Italic>
    </AboutCard>
  )
}
