import { Container, Group, ActionIcon } from '@mantine/core'
import {
  BrandGithub,
  BrandLinkedin,
  BrandMedium,
  BrandTwitter,
} from 'tabler-icons-react'

import useStyles from './Footer.styles'

const Footer = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group spacing={48} className={classes.links} position="center" noWrap>
          <a
            href="https://www.github.com/aycanogut"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size="xl" className={classes.links}>
              <BrandGithub size={32} />
            </ActionIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/aycanogut/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size="xl" className={classes.links}>
              <BrandLinkedin size={32} />
            </ActionIcon>
          </a>
          <a
            href="https://medium.com/@aycanogut"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size="xl" className={classes.links}>
              <BrandMedium size={32} />
            </ActionIcon>
          </a>
          <a
            href="https://twitter.com/bleedeleventh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon size="xl" className={classes.links}>
              <BrandTwitter size={32} />
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </div>
  )
}

export default Footer
