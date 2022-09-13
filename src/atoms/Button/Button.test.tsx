import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render } from '@testing-library/react'

import Button from './Button'

describe('./src/atoms/Button', () => {
  it('Should render the component', () => {
    const { container } = render(<Button id="teste" text="teste" />)
    expect(container).toBeInTheDocument()
  })
  it('Should not have basic a11y issues', async () => {
    const { container } = render(<Button id="teste" text="teste" />)

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Should render the component using different configs (variant=contained)', () => {
    const { container } = render(
      <Button variant="contained" id="teste" text="teste" />
    )
    expect(container).toBeInTheDocument()
  })

  it('Should not have basic a11y issues (variant=contained)', async () => {
    const { container } = render(
      <Button variant="contained" id="teste" text="teste" />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Should render the component using different configs (variant=outlined)', () => {
    const { container } = render(
      <Button variant="outlined" id="teste" text="teste" />
    )

    expect(container).toBeInTheDocument()
  })
  it('Should not have basic a11y issues (variant=outlined)', async () => {
    const { container } = render(
      <Button variant="outlined" id="teste" text="teste" />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Should render the component using different configs (variant=link)', () => {
    const { container } = render(
      <Button variant="link" id="teste" text="teste" />
    )

    expect(container).toBeInTheDocument()
  })
  it('Should not have basic a11y issues (variant=link)', async () => {
    const { container } = render(
      <Button variant="link" id="teste" text="teste" />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Should render the component using different configs (variant=text)', () => {
    const { container } = render(
      <Button variant="text" id="teste" text="teste" />
    )

    expect(container).toBeInTheDocument()
  })
  it('Should not have basic a11y issues (variant=text)', async () => {
    const { container } = render(
      <Button variant="text" id="teste" text="teste" />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Should render the component using different configs (size=small)', () => {
    const { container } = render(<Button size="sm" id="teste" text="teste" />)

    expect(container).toBeInTheDocument()
  })
  it('Should not have basic a11y issues (variant=small)', async () => {
    const { container } = render(<Button size="sm" id="teste" text="teste" />)

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Should render the component using different configs (size=medium)', () => {
    const { container } = render(<Button size="md" id="teste" text="teste" />)

    expect(container).toBeInTheDocument()
  })
  it('Should not have basic a11y issues (variant=medium)', async () => {
    const { container } = render(<Button size="md" id="teste" text="teste" />)

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Should render the component using different configs (size=large)', () => {
    const { container } = render(<Button size="lg" id="teste" text="teste" />)

    expect(container).toBeInTheDocument()
  })
  it('Should not have basic a11y issues (variant=large)', async () => {
    const { container } = render(<Button size="lg" id="teste" text="teste" />)

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
