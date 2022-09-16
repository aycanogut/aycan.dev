import React, { FC } from 'react'
import { Card, Text } from '@mantine/core'
import { motion } from 'framer-motion'
import { IBookmarkProps } from '../../interfaces/Bookmark.interface'
import useStyles from './Bookmark.styles'

const Bookmark: FC<IBookmarkProps> = ({ title, link }) => {
  const { classes } = useStyles()

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    >
      <Card
        className={classes.card}
        component="a"
        href={link}
        target="_blank"
        withBorder
        radius="sm"
        p="sm"
        mb={14}
        shadow="xs"
      >
        <Text weight={600}>{title}</Text>
      </Card>
    </motion.div>
  )
}

export default Bookmark
