import React from 'react'
import { axe } from 'jest-axe'
import { render, fireEvent, RenderResult } from '@testing-library/react'
import { vi, SpyInstance } from 'vitest'

import Button from '@atoms/Button/Button'
import { Dialog, DialogButton } from './Dialog'

const openText = 'Open'
const closeText = 'Close'
const titleText = 'Title'
const size = 'sm'

const triggerButton = (
  <Button id="triggerButton" variant="contained" text={openText} />
)
const primaryButton = (
  <DialogButton
    id="primaryButton"
    variant="contained"
    size={size}
    text="Salvar"
  />
)
const secondaryButton = (
  <DialogButton id="secondaryButton" variant="text" size="sm" text="Cancelar" />
)

const args = {
  id: 'Dialog-id',
  title: titleText,
  size: size
}

const DialogTest = () => (
  <Dialog
    triggerButton={triggerButton}
    primaryButton={primaryButton}
    secondaryButton={secondaryButton}
    {...args}
  >
    Lorem ipsum sit dolor amet
  </Dialog>
)

describe('having a usual Dialog', () => {
  let dialog: RenderResult
  let trigger: HTMLElement
  let closeButton: HTMLElement
  let consoleWarnMock: SpyInstance
  let consoleWarnMockFunction: () => void

  beforeEach(() => {
    consoleWarnMockFunction = vi.fn()
    consoleWarnMock = vi
      .spyOn(console, 'warn')
      .mockImplementation(consoleWarnMockFunction)

    dialog = render(<DialogTest />)
    trigger = dialog.getByText(openText)
  })

  afterEach(() => {
    consoleWarnMock.mockRestore()
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(dialog.container)).toHaveNoViolations()
  })

  describe('after clicking the trigger', () => {
    beforeEach(() => {
      fireEvent.click(trigger)
      closeButton = dialog.getByTestId(closeText)
    })
    it('should open the content', () => {
      expect(closeButton).toBeVisible()
    })
    it('should have no accessibility violations', async () => {
      expect(await axe(dialog.container)).toHaveNoViolations()
    })
    describe('when pressing escape', () => {
      beforeEach(() => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        fireEvent.keyDown(document.activeElement!, { key: 'Escape' })
      })
      it('should close the content', () => {
        expect(closeButton).not.toBeInTheDocument()
      })
    })

    describe('when pressing the close button', () => {
      it('should close the dialog', () => {
        closeButton.click()
        expect(closeButton).not.toBeInTheDocument()
      })
    })
  })
})
