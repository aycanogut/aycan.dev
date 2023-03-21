import {
  Anchor,
  Badge,
  Box,
  Card,
  Group,
  Text,
  useMantineTheme,
} from '@mantine/core'
import dayjs from 'dayjs'
import React, { FC } from 'react'
import { ExternalLink } from 'tabler-icons-react'

import { IArticleProps } from '../../interfaces/Article.interface'
import Transition from '../Transition/Transition'
import useStyles from './Article.styles'

const Article: FC<IArticleProps> = ({ title, link, categories, pubDate }) => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <Transition whileHover={{ scale: 1.01 }}>
      <Card className={classes.card} withBorder radius="sm" shadow="sm">
        <Card.Section pl="md" pr="sm" pt="sm">
          <Group position="apart">
            <Text size="xs" color="dimmed">
              {dayjs(pubDate).format('MMMM D, YYYY')}
            </Text>
            <Anchor
              href={link}
              target="_blank"
              aria-label="Link to article on Medium"
            >
              <ExternalLink size={24} strokeWidth={2} color="#808080" />
            </Anchor>
          </Group>
        </Card.Section>
        <Card.Section p="md" mb="md">
          <Text size="lg" weight={700}>
            {title}
          </Text>
        </Card.Section>
        <Card.Section py="md" pb="sm">
          <Box className={classes.badges}>
            {categories.slice(4).map((category: string) => (
              <Badge
                key={category}
                color={theme.colorScheme === 'dark' ? 'yellow' : 'dark'}
                size="xs"
                variant="outline"
              >
                {category}
              </Badge>
            ))}
          </Box>
        </Card.Section>
      </Card>
    </Transition>
  )
}

export default Article
