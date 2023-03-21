import { Card, Text } from '@mantine/core'
import React, { FC } from 'react'

import { IBookmarkProps } from '../../interfaces/Bookmark.interface'
import Transition from '../Transition/Transition'
import useStyles from './Bookmark.styles'

const Bookmark: FC<IBookmarkProps> = ({ title, link }) => {
  const { classes } = useStyles()

  return (
    <Transition whileHover={{ scale: 1.01 }}>
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
    </Transition>
  )
}

export default Bookmark
