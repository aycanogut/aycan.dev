import React, { FC } from 'react'
import {
  Card,
  Box,
  Group,
  Badge,
  Anchor,
  useMantineTheme,
  Grid,
  Title,
} from '@mantine/core'
import CustomImage from '../CustomImage/CustomImage'
import { IArticleProps } from '../../ts/interfaces/Article.interface'
import useStyles from './Article.styles'

const Article: FC<IArticleProps> = ({ thumbnail, title, link, categories }) => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  const badges = categories.map((category: {}, i: number) => (
    <Badge
      key={i}
      color={theme.colorScheme === 'dark' ? 'yellow' : 'grape'}
      size="xs"
      variant="outline"
    >
      {category}
    </Badge>
  ))

  return (
    <Card withBorder radius="sm" mb={30} className={classes.card}>
      <Anchor className={classes.anchor} href={link} target="_blank">
        <Card.Section>
          <Grid>
            <Grid.Col span={12} xs={4}>
              <Box className={classes.image}>
                <CustomImage
                  src={thumbnail}
                  alt={title}
                  width={200}
                  height={100}
                  objectFit="cover"
                />
              </Box>
            </Grid.Col>
            <Grid.Col span={12} xs={8}>
              <Title order={3} className={classes.text}>
                {title}
              </Title>
            </Grid.Col>
          </Grid>
        </Card.Section>
      </Anchor>
      <Card.Section>
        <Group spacing={8} className={classes.group}>
          {badges}
        </Group>
      </Card.Section>
    </Card>
  )
}

export default Article
