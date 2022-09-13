import { RadioGroupState } from '@react-stately/radio'
import React from 'react'

export const RadioContext = React.createContext<RadioGroupState>(
  {} as RadioGroupState
)

type RadioGroupProviderProps = { value: RadioGroupState }
export const RadioGroupProvider: React.FC<RadioGroupProviderProps> = ({
  children,
  value
}) => <RadioContext.Provider value={value}>{children}</RadioContext.Provider>
