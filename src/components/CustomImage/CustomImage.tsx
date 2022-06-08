import React, { FC } from 'react'
import Image, { ImageLoader } from 'next/image'

interface ICustomImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive' | 'raw' | undefined
  loader?: ImageLoader
}

const CustomImage: FC<ICustomImageProps> = ({
  src,
  alt,
  width,
  height,
  layout,
  loader,
}) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    layout={layout}
    loader={loader}
  />
)

export default CustomImage
