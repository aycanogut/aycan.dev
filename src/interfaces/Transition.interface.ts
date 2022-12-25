import { ReactNode } from 'react'

export interface ITransitionProps {
  animate?: object
  transition?: object
  initial?: object
  whileHover?: object
  children: ReactNode
}
