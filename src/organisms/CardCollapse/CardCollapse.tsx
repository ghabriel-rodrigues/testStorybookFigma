import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { ButtonProps } from '@/atoms/Button/Button'
import {
  CollapsibleCSS,
  CollapsibleHeaderCSS,
  CollapsibleButtonCSS,
  CollapsibleContentCSS,
  CollapsibleDivisorCSS,
  CollapsibleFooterCSS
} from './CardCollapse.styles'
import Heading from '@/atoms/Typography/Heading/Heading'
import Icon from '@/atoms/Icon/Icon'
import { IconType } from '@/atoms/Icon/enums'
import { HeadingVariant } from '@/atoms/Typography/Heading/types/Types'
import Divisor from '@atoms/Divisor/Divisor'

const Collapsible = styled(CollapsiblePrimitive.Root)`
  ${CollapsibleCSS}
`

const CollapsibleHeader = styled.div`
  ${CollapsibleHeaderCSS}
`

const CollapsibleButton = styled.button`
  ${CollapsibleButtonCSS}
`

const CollapsibleContent = styled.div`
  ${CollapsibleContentCSS}
`

const CollapsibleDivisor = styled(Divisor)`
  ${CollapsibleDivisorCSS}
`

const CollapsibleFooter = styled.div`
  ${CollapsibleFooterCSS}
`

export interface CardCollapseProps {
  title: string
  expandButtonAriaLabel?: string
  open: boolean
  children: React.ReactNode
  primaryButton?: ButtonProps
  secondaryButton?: ButtonProps

  onOpenChange?: (open: boolean) => void
}

const CardCollapse: React.FC<CardCollapseProps> = ({
  title,
  expandButtonAriaLabel,
  open,
  children,
  primaryButton,
  secondaryButton,

  onOpenChange
}) => {
  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const handleOpenChange = (open: boolean) => {
    if (onOpenChange) onOpenChange(open)
    setIsOpen(open)
  }

  return (
    <Collapsible open={isOpen} onOpenChange={handleOpenChange}>
      <CollapsibleHeader>
        <Heading variant={HeadingVariant.h3}>{title}</Heading>
        <CollapsiblePrimitive.Trigger asChild>
          <CollapsibleButton aria-label={expandButtonAriaLabel}>
            {isOpen ? (
              <Icon type={IconType.KeyboardArrowUpIcon} />
            ) : (
              <Icon type={IconType.KeyboardArrowDownIcon} />
            )}
          </CollapsibleButton>
        </CollapsiblePrimitive.Trigger>
      </CollapsibleHeader>

      <CollapsiblePrimitive.Content>
        <CollapsibleContent>{children}</CollapsibleContent>

        {(primaryButton || secondaryButton) && (
          <>
            <CollapsibleDivisor />
            <CollapsibleFooter>
              {primaryButton ?? null}
              {secondaryButton ?? null}
            </CollapsibleFooter>
          </>
        )}
      </CollapsiblePrimitive.Content>
    </Collapsible>
  )
}

export default CardCollapse
