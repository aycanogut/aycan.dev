import React, { FC } from 'react'
import {
  Text,
  Title,
  Group,
  Button,
  useMantineTheme,
  Paper,
} from '@mantine/core'
import { motion } from 'framer-motion'
import { IProjectProps } from '../../interfaces/Project.interface'
import useStyles from './Project.styles'

const Project: FC<IProjectProps> = ({ title, description, links }) => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    >
      <Paper className={classes.card} withBorder radius="sm" shadow="md" p="lg">
        <Title order={3}>{title}</Title>
        <Text my="auto">{description}</Text>
        <Group spacing="xs" mt="auto">
          <Text weight={700} size="xs">
            Links:
          </Text>
          {links &&
            links.map((link: { name: string; link: string }, i: number) => (
              <Button key={i} variant="default" color="yellow" size="xs">
                <Text
                  className={classes.button}
                  component="a"
                  variant="link"
                  href={link.link}
                  weight="600"
                  size="xs"
                  target="_blank"
                  transform="capitalize"
                >
                  {link.name}
                </Text>
              </Button>
            ))}
        </Group>
      </Paper>
    </motion.div>
  )
}

export default Project
