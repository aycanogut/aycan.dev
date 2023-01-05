export interface IBlogProps {
  data: {
    feed: {}
    items: []
    status: string
  }
}

export interface IArticleProps {
  items: []
  title: string
  link: string
  categories: any
  pubDate: string
  map: (items: any) => any
  slice: Function
}
