import {
  DsColorGrayPolarExtraLight,
  DsColorGraySmokeExtraLight
} from '@/tokens/tokens'
import css from '@styled-system/css'

export const SwitchBaseCSS = css({
  display: 'inline-flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0 5px'
})

export const SwitchContainerCSS = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  height: '44px'
})

export const SwitchToggleCSS = css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
  minWidth: '40px',
  transition: 'opacity 0.2s ease-in-out',
  '&::before': {
    content: "''",
    backgroundColor: DsColorGraySmokeExtraLight,
    transition: 'background-color 0.2s ease-in-out, opacity 0.2s ease-in-out',
    width: '100%',
    height: '15px',
    position: 'absolute',
    borderRadius: '20px'
  }
})

export const SwitchThumbCSS = css({
  display: 'inline-block',
  borderRadius: '50%',
  backgroundColor: DsColorGrayPolarExtraLight,
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
  height: '20px',
  minWidth: '20px',
  transition:
    'transform 0.2s ease-in-out, background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  zIndex: 1
})
