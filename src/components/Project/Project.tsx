import {
  Anchor,
  Badge,
  Box,
  Divider,
  Group,
  Paper,
  Text,
  useMantineTheme,
} from '@mantine/core'
import React, { FC } from 'react'
import { BrandGithub, BrandVercel } from 'tabler-icons-react'

import { IProjectProps } from '../../interfaces/Project.interface'
import Transition from '../Transition/Transition'
import useStyles from './Project.styles'

const Project: FC<IProjectProps> = ({ title, description, links, stack }) => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <Transition whileHover={{ scale: 1.01 }}>
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
                links.map((link: { link: string; id: number }) =>
                  link.link.includes('github') ? (
                    <Anchor
                      key={link.id}
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
                      key={link.id}
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
          <Text mb={20} size="sm">
            {description}
          </Text>
          <Box sx={{ width: '100%', height: '100%' }}>
            <Divider my="xs" mt="auto" size="xs" />
            {stack &&
              stack.map((item: string) => (
                <Badge
                  key={item}
                  size="xs"
                  variant="outline"
                  color={theme.colorScheme === 'dark' ? 'yellow' : 'dark'}
                  ml={theme.breakpoints.xs ? 0 : 10}
                  mr={theme.breakpoints.xs ? 10 : 0}
                >
                  {item}
                </Badge>
              ))}
          </Box>
        </Group>
      </Paper>
    </Transition>
  )
}

export default Project
