import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Header,
  Container,
  Group,
  Burger,
  Text,
  Paper,
  Transition,
  ActionIcon,
} from '@mantine/core'
import { openSpotlight } from '@mantine/spotlight'
import { useBooleanToggle } from '@mantine/hooks'
import ColorSchemeToggle from '../ColorSchemeToggle/ColorSchemeToggle'
import { ICustomHeaderProps } from '../../interfaces/CustomHeader.interface'
import useStyles, { HEADER_HEIGHT } from './CustomHeader.styles'

const CustomHeader = ({ links }: ICustomHeaderProps) => {
  const [opened, toggleOpened] = useBooleanToggle(false)
  const [_active, setActive] = useState(links[0].link)
  const { classes, cx } = useStyles()
  const router = useRouter()

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Group spacing={1} className={classes.links}>
          {links.map((link) => (
            <Link key={link.label} href={link.link} prefetch={false}>
              <a
                tabIndex={0}
                role="link"
                className={cx(
                  classes.link,
                  router.pathname === link.link ? classes.linkActive : ''
                )}
                onClick={() => {
                  setActive(link.link)
                  toggleOpened(false)
                }}
                onKeyDown={undefined}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </Group>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="md"
          title="Open navigation"
          aria-label="Open navigation"
        />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {links.map((link) => (
                <Link key={link.label} href={link.link} prefetch={false}>
                  <a
                    tabIndex={0}
                    role="link"
                    className={cx(
                      classes.link,
                      router.pathname === link.link ? classes.linkActive : ''
                    )}
                    onClick={() => {
                      setActive(link.link)
                      toggleOpened(false)
                    }}
                    onKeyDown={undefined}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </Paper>
          )}
        </Transition>
        <ActionIcon
          className={classes.spotlight}
          onClick={() => openSpotlight()}
          size="lg"
          radius="sm"
          aria-label="Spotlight Button"
        >
          <Text size="md" weight={600}>
            ⌘
          </Text>
          &nbsp;<Text>+</Text>&nbsp;
          <Text size="md" weight={600}>
            K
          </Text>
        </ActionIcon>
        <ColorSchemeToggle />
      </Container>
    </Header>
  )
}

export default CustomHeader
