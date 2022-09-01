import React, { FC } from 'react'
import {
  Card,
  Grid,
  Text,
  Title,
  Group,
  Badge,
  Button,
  useMantineTheme,
} from '@mantine/core'
import CustomImage from '../CustomImage/CustomImage'
import { IProjectProps } from '../../ts/interfaces/Project.interface'
import useStyles from './Project.styles'

const Project: FC<IProjectProps> = ({
  image,
  title,
  description,
  stack,
  links,
}) => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

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
          <Group mt={28}>
            <Text weight={700} size="sm">
              Tech Stack:
            </Text>
            {stack &&
              stack.map((tech: string, i: number) => (
                <Badge
                  key={i}
                  color={theme.colorScheme === 'dark' ? 'yellow' : 'grape'}
                  size="xs"
                  variant="outline"
                >
                  {tech}
                </Badge>
              ))}
          </Group>
          <Group mt={22} spacing="sm">
            <Text weight={700} size="sm">
              Links:
            </Text>
            {links &&
              links.map(
                (link: { name: string; link: string }, index: number) => (
                  <Button
                    key={index}
                    variant="default"
                    color="yellow"
                    size="xs"
                  >
                    <Text
                      className={classes.button}
                      component="a"
                      variant="link"
                      href={link.link}
                      weight="700"
                      size="xs"
                      target="_blank"
                      transform="capitalize"
                    >
                      {link.name}
                    </Text>
                  </Button>
                )
              )}
          </Group>
        </Grid.Col>
      </Grid>
    </Card>
  )
}

export default Project
