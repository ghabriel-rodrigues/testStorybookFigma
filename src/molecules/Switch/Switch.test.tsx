import { render as rtlRender, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import Switch from './Switch'
import { SwitchProps } from './Switch.types'

const defaultProps = {
  id: 'switch',
  'aria-label': 'Habilitar filtros de empresas com selo Gupy',
  name: 'tested-switch'
}

const render = (props: SwitchProps = defaultProps) =>
  rtlRender(<Switch {...props} />)

const selectors = {
  findElement: () => screen.getByRole('switch')
}

const actions = {
  toggleSwitch: () => {
    const element = selectors.findElement()
    userEvent.click(element)
  }
}

describe('atoms/Switch', () => {
  it('should render component', () => {
    render()

    expect(selectors.findElement()).toBeInTheDocument()
    expect(selectors.findElement()).not.toBeChecked()
  })

  it('should render Switch label', () => {
    const content = 'Switch content'
    render({
      ...defaultProps,
      label: content
    })

    expect(screen.queryByText(content)).toBeInTheDocument()
  })

  it('should not have a11y issues', () => {
    const { container } = render({
      ...defaultProps,
      label: 'acessible switch'
    })

    expect(axe(container)).resolves.toHaveNoViolations()
  })

  it('should trigger onChange event', () => {
    const onChange = vi.fn()
    render({
      ...defaultProps,
      onChange
    })

    actions.toggleSwitch()

    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('should render initially checked (uncontrolled)', () => {
    render({
      ...defaultProps,
      defaultSelected: true
    })

    expect(selectors.findElement()).toBeChecked()
  })

  it('should toggle checked value when clicked (uncontrolled)', () => {
    render({
      ...defaultProps,
      defaultSelected: false
    })

    actions.toggleSwitch()

    expect(selectors.findElement()).toBeChecked()
  })

  it('should render initially checked (controlled)', () => {
    render({
      ...defaultProps,
      checked: true
    })

    expect(selectors.findElement()).toBeChecked()
  })

  it('should toggle checked value when clicked (controlled)', () => {
    const { result } = renderHook(() => {
      const [checked, setChecked] = useState(false)
      return {
        checked,
        setChecked
      }
    })
    const ControlledSwitch = () => (
      <Switch
        {...defaultProps}
        checked={result.current.checked}
        onChange={result.current.setChecked}
      />
    )
    const { rerender } = rtlRender(<ControlledSwitch />)

    actions.toggleSwitch()

    rerender(<ControlledSwitch />)

    expect(selectors.findElement()).toBeChecked()
    expect(result.current.checked).toBe(true)
  })
})
