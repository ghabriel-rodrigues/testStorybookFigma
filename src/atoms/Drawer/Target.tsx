import { HTMLAttributes } from 'react'
import { Transition } from 'react-transition-group'
import { IconType } from '../Icon/enums'
import Icon from '../Icon/Icon'
import * as disclosure from '../Disclosure'
import * as states from './animation-states'
import * as styled from './Drawer.styles'

export type TargetProps = {
  closeOnEscape?: boolean
  closeButtonProps?: {
    'aria-label'?: string
  }
} & HTMLAttributes<HTMLDivElement>

const defaultProps: TargetProps = {
  closeOnEscape: true,
  closeButtonProps: {
    'aria-label': 'Close'
  }
}

export const Target: React.FC<TargetProps> = ({
  children,
  closeOnEscape,
  closeButtonProps,
  ...props
}) => {
  const { id, isOpen, closable, close } = disclosure.useDisclosure()
  return (
    <Transition in={isOpen} timeout={states.duration}>
      {(state: string) => (
        <disclosure.Target closeOnEscape={closeOnEscape}>
          <styled.View {...props} style={{ ...states.view[state] }}>
            <styled.Overlay
              onClick={close}
              aria-hidden="true"
              style={{ ...states.overlay[state] }}
              data-testid={`${id}-overlay`}
            />
            <styled.DrawerView
              style={{
                ...states.drawer.common,
                ...states.drawer.states[state]
              }}
            >
              {closable && (
                <styled.CloseButtonWrap>
                  <disclosure.CloseButton>
                    <styled.CloseButton {...closeButtonProps}>
                      <Icon type={IconType.Close} />
                    </styled.CloseButton>
                  </disclosure.CloseButton>
                </styled.CloseButtonWrap>
              )}
              {children}
            </styled.DrawerView>
          </styled.View>
        </disclosure.Target>
      )}
    </Transition>
  )
}

Target.defaultProps = defaultProps
