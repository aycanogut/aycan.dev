import React, { FC } from 'react'
import {
  Text,
  Title,
  Group,
  useMantineTheme,
  Paper,
  Badge,
  Anchor,
  Box,
} from '@mantine/core'
import { motion } from 'framer-motion'
import { BrandGithub, BrandVercel } from 'tabler-icons-react'
import { IProjectProps } from '../../interfaces/Project.interface'
import useStyles from './Project.styles'

const Project: FC<IProjectProps> = ({ title, description, links, stack }) => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    >
      <Paper
        className={classes.card}
        withBorder
        radius="sm"
        shadow="md"
        pt="md"
        px="md"
        pb="xs"
      >
        <Title order={4} mb="xs">
          {title}
        </Title>
        <Text className={classes.text} size="sm" my="auto">
          {description}
        </Text>
        <Paper mt="auto" pt={8} sx={{ background: 'none' }}>
          <Group position="apart">
            <Box>
              {links &&
                links.map((link: { name: string; link: string }, i: number) =>
                  link.link.includes('github') ? (
                    <Anchor
                      key={i}
                      component="a"
                      href={link.link}
                      target="_blank"
                      mr={12}
                    >
                      <BrandGithub
                        size={28}
                        strokeWidth={2}
                        color={theme.colorScheme === 'dark' ? 'white' : 'black'}
                      />
                    </Anchor>
                  ) : (
                    <Anchor
                      key={i}
                      component="a"
                      href={link.link}
                      target="_blank"
                    >
                      <BrandVercel
                        size={28}
                        strokeWidth={2}
                        color={theme.colorScheme === 'dark' ? 'white' : 'black'}
                      />
                    </Anchor>
                  )
                )}
            </Box>
            <Box mb={8}>
              {stack &&
                stack.map((item: string, i: number) => (
                  <Badge
                    size="xs"
                    variant="outline"
                    color={theme.colorScheme === 'dark' ? 'yellow' : 'dark'}
                    key={i}
                    ml={theme.breakpoints.xs ? 0 : 10}
                    mr={theme.breakpoints.xs ? 10 : 0}
                  >
                    {item}
                  </Badge>
                ))}
            </Box>
          </Group>
        </Paper>
      </Paper>
    </motion.div>
  )
}

export default Project
