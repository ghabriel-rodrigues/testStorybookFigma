import React from 'react'
import { it, describe, expect, vi } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Select from './Select'

const spyOnChange = vi.fn()
const renderComponent = () =>
  render(
    <Select
      id="id-to-select"
      placeholder="My select atom"
      ariaLabel="Label To Select"
      onChange={spyOnChange}
      options={[
        { label: 'Portuguese', value: 'pt' },
        { label: 'Spanish', value: 'es' },
        { label: 'English', value: 'en' }
      ]}
    />
  )
describe('./src/atoms/Select', () => {
  it('should render component and check renderer options after click on it', async () => {
    renderComponent()
    expect(screen.queryByText('Spanish')).not.toBeInTheDocument()
    const selectComponent = screen.getByText('My select atom')
    expect(selectComponent).toBeInTheDocument()

    userEvent.click(selectComponent)
    expect(screen.getByText('Spanish')).toBeInTheDocument()
  })

  it('should choose some options and verify values fired after choosing it', async () => {
    renderComponent()

    const selectComponent = screen.getByText('My select atom')
    userEvent.click(selectComponent)

    userEvent.click(screen.queryByText('Spanish') as HTMLInputElement)

    expect(spyOnChange).toHaveBeenCalledWith(
      { label: 'Spanish', value: 'es' },
      { action: 'select-option', name: undefined, option: undefined }
    )

    userEvent.click(screen.getByText('Spanish'))
    userEvent.click(screen.queryByText('English') as HTMLInputElement)

    expect(spyOnChange).toHaveBeenCalledWith(
      { label: 'English', value: 'en' },
      { action: 'select-option', name: undefined, option: undefined }
    )
  })
  it('should not have have basic accessibility issues', async () => {
    const { container } = render(
      <Select
        id="id-to-select"
        placeholder="My select atom"
        ariaLabel="Label To Select"
        options={[
          { label: 'Portuguese', value: 'pt' },
          { label: 'Spanish', value: 'es' },
          { label: 'English', value: 'en' }
        ]}
      />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
