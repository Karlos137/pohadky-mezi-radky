import NextImage, { ImageProps as NextImageProps } from "next/image"

interface ImageProps extends NextImageProps {}

const Image = (props: ImageProps) => {
  return (
    <div className="relative aspect-video w-full rounded-2xl">
      <NextImage
        {...props}
        fill={true}
        className="!m-0 rounded-2xl object-cover object-center"
      />
    </div>
  )
}

export default Image
