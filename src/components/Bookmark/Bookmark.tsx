import React, { FC } from 'react'
import { Card, Text } from '@mantine/core'
import { IBookmarkProps } from '../../interfaces/Bookmark.interface'
import useStyles from './Bookmark.styles'

const Bookmark: FC<IBookmarkProps> = ({ title, link }) => {
  const { classes } = useStyles()

  return (
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
  )
}

export default Bookmark
