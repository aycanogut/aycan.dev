import React, { useState } from 'react'
import {
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
} from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'

import useStyles, { HEADER_HEIGHT } from './CustomHeader.styles'

import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle'

interface ICustomHeaderProps {
  links: { link: string; label: string }[]
}

const CustomHeader = ({ links }: ICustomHeaderProps) => {
  const [opened, toggleOpened] = useBooleanToggle(false)
  const [active, setActive] = useState(links[0].link)
  const { classes, cx } = useStyles()

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault()
        setActive(link.link)
        toggleOpened(false)
      }}
    >
      {link.label}
    </a>
  ))

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
        <ColorSchemeToggle />
      </Container>
    </Header>
  )
}

export default CustomHeader
