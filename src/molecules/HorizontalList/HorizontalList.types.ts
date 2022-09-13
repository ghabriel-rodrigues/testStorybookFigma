import { ComponentPropsWithoutRef } from 'react'
import { DirectionButtonProps } from './components/DirectionButton.types'

export type HorizontalListProps = ComponentPropsWithoutRef<'ol'> & {
  directionButtonProps?: DirectionButtonProps
}
