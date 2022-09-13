import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import userEvent from '@testing-library/user-event'
import { render as tlRender, screen, waitFor } from '@testing-library/react'
import { Drawer, DrawerProps } from './Drawer'
import { Target } from './Target'
import { Trigger } from './index'

const render = (props: DrawerProps = { id: 'testing-drawer' }) =>
  tlRender(
    <Drawer {...props}>
      <Trigger>
        <button aria-label="Open Drawer">Open Drawer</button>
      </Trigger>
      <Target data-testid="testing-drawer-target">
        <p>drawer content here!</p>
      </Target>
    </Drawer>
  )

const selectors = {
  findTrigger: () => screen.findByRole('button', { name: 'Open Drawer' }),
  findCloseButton: () => screen.findByRole('button', { name: 'Close' }),
  findTarget: () => screen.findByTestId('testing-drawer-target'),
  findOverlay: ({ id }: { id: string }) => screen.findByTestId(`${id}-overlay`)
}

const actions = {
  open: async () => {
    const trigger = await selectors.findTrigger()
    userEvent.click(trigger)
  },

  closeByButton: async () => {
    const closeButton = await selectors.findCloseButton()
    userEvent.click(closeButton)
  },

  closeByOverlay: async ({ id }: { id: string }) => {
    const overlay = await selectors.findOverlay({ id })
    userEvent.click(overlay)
  }
}

describe('atoms/Drawer', () => {
  it('should not have a11y issues', () => {
    const { container } = render()
    return expect(axe(container)).resolves.toHaveNoViolations()
  })

  it('should open drawer view via trigger component', async () => {
    render({ id: 'testing-open-by-trigger-button' })
    await actions.open()
    await waitFor(async () => {
      const target = await selectors.findTarget()
      return expect(target).toHaveAttribute('aria-hidden', 'false')
    })
  })

  it('should close drawer view via close button', async () => {
    render({ id: 'testing-close-by-button' })
    await actions.open()
    await actions.closeByButton()
    await waitFor(async () => {
      const target = await selectors.findTarget()
      return expect(target).toHaveAttribute('aria-hidden', 'true')
    })
  })

  it('should close drawer view via overlay', async () => {
    const id = 'testing-close-by-overlay'
    render({ id })
    await actions.open()
    await actions.closeByOverlay({ id })
    await waitFor(async () => {
      const target = await selectors.findTarget()
      return expect(target).toHaveAttribute('aria-hidden', 'true')
    })
  })
})
