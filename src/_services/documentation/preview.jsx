import React from 'react'
import Fonts from '@atoms/Fonts/Fonts'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  (Story) => (
    <>
      <Fonts />
      <Story />
    </>
  )
]
