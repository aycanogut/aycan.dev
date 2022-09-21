import React, { FC } from 'react'
import {
  Card,
  Group,
  Stack,
  useMantineTheme,
  Anchor,
  Text,
  Title,
} from '@mantine/core'
import { motion } from 'framer-motion'
import { Star } from 'tabler-icons-react'
import { IRepoProps } from '../../interfaces/Repo.interface'
import useStyles from './Repo.styles'

const Repo: FC<IRepoProps> = ({ title, description, url, starCount }) => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    >
      <Anchor href={url} target="_blank" className={classes.link}>
        <Card withBorder radius="md" className={classes.card}>
          <Stack>
            <Title order={5}>{title}</Title>
            <Text size="sm" my="md">
              {description}
            </Text>
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
    </motion.div>
  )
}

export default Repo
