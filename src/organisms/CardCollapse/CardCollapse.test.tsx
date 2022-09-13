import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'

import CardCollapse from './CardCollapse'
import Paragraph from '@/atoms/Typography/Paragraph/Paragraph'

describe('CardCollapse tests', () => {
  it('should render just the title when collapsed', () => {
    const { container } = render(
      <CardCollapse
        title="Titulo"
        open={false}
        expandButtonAriaLabel="Expandir"
      >
        <Paragraph>Conteudo</Paragraph>
      </CardCollapse>
    )

    expect(screen.getByText('Titulo')).toBeInTheDocument()
    expect(screen.queryByText('Conteudo')).toBeNull()
  })

  it('should render the component and content when expanded', () => {
    const { container } = render(
      <CardCollapse title="Titulo" open={true} expandButtonAriaLabel="Expandir">
        <Paragraph>Conteudo</Paragraph>
      </CardCollapse>
    )

    expect(screen.getByText('Titulo')).toBeInTheDocument()
    expect(screen.getByText('Conteudo')).toBeInTheDocument()
  })

  it('shouldnt have any accessibility issues', async () => {
    const { container } = render(
      <CardCollapse title="Titulo" open={true} expandButtonAriaLabel="Expandir">
        <Paragraph>Conteudo</Paragraph>
      </CardCollapse>
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
