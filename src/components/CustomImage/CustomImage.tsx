import React, { FC } from 'react'
import Image from 'next/image'
import { ICustomImageProps } from '../../interfaces/CustomImage.interface'

const CustomImage: FC<ICustomImageProps> = ({
  src,
  alt,
  width,
  height,
  layout,
  objectFit,
  className,
}) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    layout={layout}
    objectFit={objectFit}
    className={className}
  />
)

export default CustomImage
