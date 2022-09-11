export interface ICustomImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive' | 'raw'
  objectFit?: any
  className?: string
}
