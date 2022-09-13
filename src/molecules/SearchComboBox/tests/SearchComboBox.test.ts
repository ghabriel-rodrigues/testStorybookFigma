import { axe } from 'jest-axe'
import { it, describe, expect, vi } from 'vitest'
import { render } from './helpers/render'
import { actions } from './helpers/actions'

describe('molecules/SearchComboBox', () => {
  it('should not have a11y issues', () => {
    const { container } = render()
    return expect(axe(container)).resolves.toHaveNoViolations()
  })

  it('should call input change handler with current value', async () => {
    const text = 'An'
    const onInputChange = vi.fn()
    render({ onInputChange })

    await actions.type(text)
    expect(onInputChange).toHaveBeenCalledTimes(text.length)
    expect(onInputChange).toHaveBeenNthCalledWith(1, 'A')
    expect(onInputChange).toHaveBeenNthCalledWith(2, 'An')
  })

  it('should call selection change handler with current id', async () => {
    const onSelectionChange = vi.fn()
    render({ onSelectionChange })

    await actions.type('An')
    await actions.choiceOptionByTextContent('Analista de informação')

    expect(onSelectionChange).toHaveBeenCalledTimes(1)
    expect(onSelectionChange).toHaveBeenCalledWith(2)
  })

  it('should call submit handler with current input value', async () => {
    const onSubmit = vi.fn()
    render({ onSubmit })

    await actions.type('Analist')
    await actions.submit()

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledWith('Analist')
  })
})
