import { Key } from 'react'

export interface IBookmarksProps {
  title: string
  link: string
  filter: Function
}

export interface IBookmarkProps {
  link: string
  title: string
  [x: string]: Key | null | undefined
}

export interface IFilteredBookmarksProps {
  tags: [string]
}
