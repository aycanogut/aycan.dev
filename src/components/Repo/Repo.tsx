import React, { FC } from 'react'
import {
  Card,
  Group,
  useMantineTheme,
  Title,
  Anchor,
  Text,
} from '@mantine/core'
import { motion } from 'framer-motion'
import { Star } from 'tabler-icons-react'
import { IRepoProps } from '../../interfaces/Repo.interface'
import useStyles from './Repo.styles'

const Repo: FC<IRepoProps> = ({ title, starCount, url }) => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    >
      <Card withBorder radius="md" p="sm">
        <Group position="apart" direction="column">
          <Anchor href={url} target="_blank" className={classes.link}>
            <Title order={5} mb="sm" color="red">
              {title}
            </Title>
          </Anchor>
          <Group spacing={4}>
            <Text size="sm">{starCount}</Text>
            <Star
              size={20}
              strokeWidth={2}
              color={theme.colorScheme === 'dark' ? '#ffd43b' : '#808080'}
            />
          </Group>
        </Group>
      </Card>
    </motion.div>
  )
}

export default Repo
