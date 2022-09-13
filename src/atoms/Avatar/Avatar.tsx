import { useCallback, useRef } from 'react'
import styled from 'styled-components'
import {
  AvatarImageStyles,
  AvatarImageSizes,
  FlatStyles
} from './Avatar.styles'

export type AvatarSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps {
  src: string
  label?: string
  size?: AvatarSizes
  isFlat?: boolean
  fallback?: string
}

interface ImageProps {
  size?: AvatarSizes
  isFlat?: boolean
}

const AvatarImage = styled.img<ImageProps>`
  ${AvatarImageStyles}
  ${AvatarImageSizes}
  ${FlatStyles}
`

export const Avatar: React.FC<AvatarProps> = ({
  size = 'xs',
  label = '',
  isFlat = false,
  fallback = '',
  ...props
}) => {
  const ref = useRef<HTMLImageElement>(null)

  const handleError = useCallback(() => {
    if (ref.current && fallback) {
      ref.current.src = fallback
    }
  }, [])

  return (
    <AvatarImage
      {...props}
      ref={ref}
      onError={handleError}
      size={size}
      isFlat={isFlat}
      alt={label}
    />
  )
}

export default Avatar
