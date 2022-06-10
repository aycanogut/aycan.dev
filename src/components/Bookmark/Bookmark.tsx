import React, { FC, Key } from 'react'
import { Card, Text } from '@mantine/core'
import useStyles from './Bookmark.styles'

export interface IBookmarkProps {
  link: string
  title: string
  [x: string]: Key | null | undefined
}
const Bookmark: FC<IBookmarkProps> = ({ title, link }) => {
  const { classes } = useStyles()

  return (
    <Card withBorder radius="xs" p="sm" mb={14} className={classes.card}>
      <Text component="a" href={link} target="_blank" weight={600}>
        {title}
      </Text>
    </Card>
  )
}

export default Bookmark
