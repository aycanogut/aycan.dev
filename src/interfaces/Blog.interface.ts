export interface IBlogProps {
  data: {
    feed: {}
    items: []
    status: string
  }
}

export interface IArticleProps {
  thumbnail: string
  title: string
  link: string
  categories: any
  pubDate: string
  map: Function
}
