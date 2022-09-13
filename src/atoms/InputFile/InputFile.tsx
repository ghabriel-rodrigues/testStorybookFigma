import { InputHTMLAttributes, LabelHTMLAttributes, useState } from 'react'
import styled from 'styled-components'
import Icon from '@atoms/Icon/Icon'
import { IconType } from '@/atoms/Icon/enums'
import {
  InputCSS,
  LabelMainContentWrapperCSS,
  LabelCSS,
  LabelTextCSS,
  LabelHintWrapperCSS,
  AcceptedFormatsCSS,
  LabelFileNameCSS,
  LabelWithDividerCSS,
  ErrorMessageWrapperCSS,
  LabelInvalidCSS
} from './InputFile.styles'
import InputHelperMessage from '@atoms/InputHelperMessage/InputHelperMessage'

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  hasError?: boolean
  hint?: string
  labelIcon?: IconType
  labelText?: string
  onFileUpload: (file: File) => void
  selectAnotherFileText?: string
}

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  hasError?: boolean
  labelIcon?: React.ReactElement
  labelText?: string
}

const ErrorMessageWrapper = styled.div`
  ${ErrorMessageWrapperCSS}
`

const Input = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  ${InputCSS}
`

const Label = styled.label<LabelProps>`
  ${LabelCSS}
  ${({ hasError }) => hasError && LabelInvalidCSS}
`

const LabelWithDivider = styled(Label)`
  ${LabelWithDividerCSS}
`

const LabelMainContentWrapper = styled.div`
  ${LabelMainContentWrapperCSS}
`

const LabelHintWrapper = styled.p`
  ${LabelHintWrapperCSS}
`

const LabelReplaceFileWrapper = styled(LabelMainContentWrapper)``

const AcceptedFormats = styled.span`
  ${AcceptedFormatsCSS}
`

const LabelText = styled.h1`
  ${LabelTextCSS}
`

const LabelFileName = styled.h1`
  ${LabelFileNameCSS}
`

const InputFile: React.FC<InputFileProps> = ({
  accept = '.doc, .docx, .pdf',
  errorMessage,
  hasError,
  hint,
  id,
  labelIcon = IconType.AddCircleOutline,
  labelText = 'Adicionar arquivo',
  onFileUpload,
  selectAnotherFileText = 'Selecionar outro arquivo',
  ...props
}) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const handleFileUpload = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (!evt?.target?.files![0]) return
    setUploadedFile(evt?.target?.files![0])
    if (onFileUpload) onFileUpload(evt?.target?.files![0])
  }

  if (uploadedFile)
    return (
      <>
        <LabelWithDivider htmlFor={id}>
          <LabelMainContentWrapper>
            <Icon type={IconType.AttachFile} />
            <LabelFileName>{uploadedFile?.name}</LabelFileName>
          </LabelMainContentWrapper>
          <LabelReplaceFileWrapper>
            <Icon type={IconType.ImportExport} />
            <LabelText>{selectAnotherFileText}</LabelText>
          </LabelReplaceFileWrapper>
        </LabelWithDivider>
        <Input
          {...props}
          type="file"
          accept={accept}
          id={id}
          onChange={handleFileUpload}
        />
      </>
    )

  return (
    <>
      <Label htmlFor={id} hasError={hasError}>
        <LabelMainContentWrapper>
          {labelIcon && <Icon type={labelIcon} />}
          <LabelText>{labelText}</LabelText>
        </LabelMainContentWrapper>
        {hint ? (
          hint
        ) : (
          <LabelHintWrapper>
            Envie o arquivo nos formatos
            <AcceptedFormats>{accept}</AcceptedFormats>
          </LabelHintWrapper>
        )}
      </Label>
      <Input
        {...props}
        type="file"
        accept={accept}
        aria-describedby={hasError ? `error-message-${id}` : undefined}
        aria-invalid={hasError}
        data-testid={id}
        id={id}
        onChange={handleFileUpload}
      />
      {errorMessage && hasError && (
        <ErrorMessageWrapper>
          <InputHelperMessage id={`error-message-${id}`} hasError={hasError}>
            {errorMessage}
          </InputHelperMessage>
        </ErrorMessageWrapper>
      )}
    </>
  )
}

export default InputFile
