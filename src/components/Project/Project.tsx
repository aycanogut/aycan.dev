import React, { FC } from 'react'
import {
  Text,
  Group,
  useMantineTheme,
  Paper,
  Badge,
  Anchor,
  Box,
  Divider,
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
        px="md"
        py="xs"
      >
        <Group className={classes.cardLayout}>
          <Group position="apart" sx={{ width: '100%' }}>
            <Text className={classes.title} size="md" weight={700} mb="xs">
              {title}
            </Text>
            <Box>
              {links &&
                links.map((link: { name: string; link: string }, i: number) =>
                  link.link.includes('github') ? (
                    <Anchor
                      key={i}
                      component="a"
                      href={link.link}
                      target="_blank"
                      mr={8}
                      aria-label="Link to project on GitHub"
                    >
                      <BrandGithub
                        size={22}
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
                        size={22}
                        strokeWidth={2}
                        color={theme.colorScheme === 'dark' ? 'white' : 'black'}
                        aria-label="Link to project on Vercel"
                      />
                    </Anchor>
                  )
                )}
            </Box>
          </Group>
          <Text className={classes.description} size="sm">
            {description}
          </Text>
          <Box sx={{ width: '100%', height: '100%' }}>
            <Divider my="xs" mt="auto" size="xs" />
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
    </motion.div>
  )
}

export default Project
