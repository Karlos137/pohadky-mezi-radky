import NextImage, { ImageProps as NextImageProps } from "next/image"

interface ImageProps extends NextImageProps {}

const Image = (props: ImageProps) => {
  return (
    <div className="relative aspect-[4/3] w-full rounded-2xl">
      <NextImage
        {...props}
        fill={true}
        placeholder="blur"
        className="!m-0 rounded-2xl object-cover object-center"
      />
    </div>
  )
}

export default Image
