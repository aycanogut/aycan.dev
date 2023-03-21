import { motion } from 'framer-motion'
import React from 'react'

const Transition = (props) => {
  const { children } = props

  return <motion.div {...props}>{children}</motion.div>
}

export default Transition
