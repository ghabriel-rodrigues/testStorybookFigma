import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InputFile from './InputFile'

describe('./atoms/InputFile', () => {
  it('should render the base component (with all default copies)', async () => {
    render(<InputFile id="input-file-id" onFileUpload={() => null} />)

    const labelComponent = screen.getByText('Adicionar arquivo')
    const hintComponent = screen.getByText('Envie o arquivo nos formatos')

    expect(labelComponent).toBeInTheDocument()
    expect(hintComponent).toBeInTheDocument()
  })

  it('should be able to upload a file', async () => {
    render(<InputFile id="input-file-id" onFileUpload={() => null} />)
    const file = new File(['dummy content'], 'example.pdf', {
      type: 'application/pdf'
    })

    const inputComponent = screen.getByTestId(
      'input-file-id'
    ) as HTMLInputElement

    userEvent.upload(inputComponent, file)

    expect(inputComponent.files![0]).toStrictEqual(file)
    expect(inputComponent.files).toHaveLength(1)
  })

  it('should change the component to the version when a file is uploaded', async () => {
    render(<InputFile id="input-file-id" onFileUpload={() => null} />)
    const file = new File(['dummy content'], 'example.pdf', {
      type: 'application/pdf'
    })

    const inputComponent = screen.getByTestId(
      'input-file-id'
    ) as HTMLInputElement

    userEvent.upload(inputComponent, file)

    const labelWithFileNameComponent = screen.getByText('example.pdf')
    const newHintComponent = screen.getByText('Selecionar outro arquivo')

    expect(labelWithFileNameComponent).toBeInTheDocument()
    expect(newHintComponent).toBeInTheDocument()
  })

  it('should render error component case hasError is set to true and errorMessage prop exists', async () => {
    render(
      <InputFile
        id="input-file-id"
        onFileUpload={() => null}
        hasError
        errorMessage="Something went wrong"
      />
    )

    const errorComponent = screen.getByText('Something went wrong')

    expect(errorComponent).toBeInTheDocument()
  })

  it('should not have basic accessibility issues', async () => {
    const { container } = render(
      <InputFile id="input-file-id" onFileUpload={() => null} />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
