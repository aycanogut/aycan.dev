import React, { FC } from 'react'
import { Card, Grid, Text, Title, Group } from '@mantine/core'
import CustomImage from '../CustomImage/CustomImage'
import { IProjectProps } from '../../ts/interfaces/Project.interface'
import useStyles from './Project.styles'

const Project: FC<IProjectProps> = ({
  image,
  title,
  description,
  stack,
  github,
  vercel,
}) => {
  const { classes } = useStyles()

  return (
    <Card withBorder radius="sm" p="lg" mb={40} className={classes.card}>
      <Grid>
        <Grid.Col span={12} xs={4} className={classes.imageWrapper}>
          <CustomImage
            src={image}
            alt={`Image of ${title} project`}
            width={249.3}
            height={218}
            layout="intrinsic"
          />
        </Grid.Col>
        <Grid.Col span={12} xs={8}>
          <Group>
            <Title order={3}>{title}</Title>
            <Text>{description}</Text>
          </Group>
          <Text weight={700} mt={22}>
            Tech Stack:
          </Text>
          <Text>{stack}</Text>
          <Group className={classes.social} mt={22} spacing="lg">
            <Text
              component="a"
              variant="link"
              href={github}
              weight="500"
              target="_blank"
            >
              Github
            </Text>
            <Text
              component="a"
              variant="link"
              href={vercel}
              weight="500"
              target="_blank"
            >
              Vercel
            </Text>
          </Group>
        </Grid.Col>
      </Grid>
    </Card>
  )
}

export default Project
