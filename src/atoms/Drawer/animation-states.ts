type StyleMap = Record<string, any>

export const duration = 225

export const view: StyleMap = {
  entering: {
    pointerEvents: 'auto'
  },
  entered: {
    pointerEvents: 'auto'
  }
}

export const drawer: StyleMap = {
  common: {
    transition: `transform ${duration}ms cubic-bezier(0, 0, 0.2, 1) 0ms`
  },
  states: {
    entering: {
      transform: 'translate(0px, 0px)'
    },
    entered: {
      transform: 'translate(0px, 0px)'
    }
  }
}

export const overlay: StyleMap = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}
