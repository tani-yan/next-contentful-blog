import Image from 'next/image'
import ContentfulImage from './contentful-image'

export default function RichTextAsset({ id, assets, description }) {
  // const asset = assets?.find((asset) => asset.sys.id === id)
  const asset = assets

  if (asset?.url) {
    // return <Image src={asset.url} layout="fill" alt={asset.description} />
    return (
      <div className="my-12 flex justify-center">
        <ContentfulImage
          width={asset.details.image.width}
          height={asset.details.image.height}
          src={asset.url}
          alt={description}
        />
        <span className="mt-2 block text-xs leading-normal">{description}</span>
      </div>
    )
  }

  return null
}
