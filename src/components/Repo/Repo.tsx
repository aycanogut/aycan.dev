import {
  Anchor,
  Card,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import React, { FC } from 'react'
import { Star } from 'tabler-icons-react'

import { IRepoProps } from '../../interfaces/Repo.interface'
import Transition from '../Transition/Transition'
import useStyles from './Repo.styles'

const Repo: FC<IRepoProps> = ({ title, description, url, starCount }) => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <Transition whileHover={{ scale: 1.01 }}>
      <Anchor href={url} target="_blank" className={classes.link}>
        <Card withBorder radius="md">
          <Stack>
            <Title order={5}>{title}</Title>
            <Text size="sm">{description}</Text>
            <Group spacing={4}>
              <Text size="sm">{starCount}</Text>
              <Star
                size={20}
                strokeWidth={2}
                color={theme.colorScheme === 'dark' ? '#ffd43b' : '#FFA500'}
              />
            </Group>
          </Stack>
        </Card>
      </Anchor>
    </Transition>
  )
}

export default Repo
