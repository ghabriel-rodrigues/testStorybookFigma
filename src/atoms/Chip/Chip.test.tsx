import { it, describe, expect, vi } from 'vitest'
import { axe } from 'jest-axe'
import Chip, { ChipProps } from './Chip'
import { render as rtlRender, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const defaultProps = {
  closeLabel: 'remove filter',
  onClose: vi.fn()
}

const render = (props: ChipProps = defaultProps) =>
  rtlRender(<Chip {...props}>chip content</Chip>)

const selectors = {
  findButtonByLabel: (label: string) =>
    screen.findByRole('button', { name: label })
}

const actions = {
  closeByLabel: async (label: string) => {
    const button = await selectors.findButtonByLabel(label)
    userEvent.click(button)
  }
}

describe('atoms/Chip', () => {
  it('should render chip content', () => {
    render()
    return expect(
      screen.findByText('chip content')
    ).resolves.toBeInTheDocument()
  })

  it('should not have a11y issues', () => {
    const { container } = render()
    return expect(axe(container)).resolves.toHaveNoViolations()
  })

  it('should call close callback', async () => {
    render()
    await actions.closeByLabel('remove filter')
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1)
  })
})
