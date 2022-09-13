import { screen, ByRoleOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

export const actions = {
  async type(text: string, options: ByRoleOptions = { name: 'Job' }) {
    const input = await screen.findByRole('combobox', options)
    userEvent.type(input, text)
  },

  async choiceOptionByTextContent(textContent: string) {
    const option = await screen.findByText(textContent)
    userEvent.click(option)
  },

  async submit(options: ByRoleOptions = { name: 'Search jobs' }) {
    const button = await screen.findByRole('button', options)
    userEvent.click(button)
  }
}
