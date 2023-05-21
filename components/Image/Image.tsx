import NextImage, { ImageProps as NextImageProps } from "next/legacy/image"

interface ImageProps extends NextImageProps {
  src: string
}

const Image = (props: ImageProps) => {
  return (
    <div className="relative aspect-[16/10] w-full rounded-[30px]">
      <NextImage
        {...props}
        src={props.src}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={`/_next/image?url=${props.src}&w=16&q=1`}
        className="!m-0 rounded-[30px] object-cover object-center"
      />
    </div>
  )
}

export default Image
