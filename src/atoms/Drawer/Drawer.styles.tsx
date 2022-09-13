import { DsColorGraySnow, DsScreenMd } from '@/tokens/tokens'
import styled from 'styled-components'

export const View = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  bottom: 0;
  right: 0;
  height: 100vh;
  pointer-events: none;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  touch-action: none;
  background-color: rgba(0, 0, 0, 0.5);
  will-change: opacity;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  opacity: 0;
`

export const DrawerView = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 20%),
    0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%);
  transform: translate(120%, 0px);
  will-change: transform;
  background-color: ${DsColorGraySnow};

  @media (min-width: ${DsScreenMd}) {
    width: 380px;
  }
`

export const CloseButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1em;
`

export const CloseButton = styled.button`
  height: 24px;
  width: 24px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
