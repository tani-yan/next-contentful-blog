import ContentfulImage from './contentful-image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

export default function CoverImage({ slug, url, title }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  })

  const image = (
    <ContentfulImage
      width={isDesktopOrLaptop ? 2000 : 2000}
      height={isDesktopOrLaptop ? 1000 : 1000}
      objectFit="cover"
      alt={`Cover Image for ${title}`}
      src={url}
    />
  )

  return (
    <div className="relative -mx-5 aspect-[2/1] border border-accent-2 leading-none md:mx-0 md:aspect-[2/1]">
      {slug ? (
        <Link href={`/entry/${slug}`}>
          <a className="block" aria-label={title}>
            {image}
          </a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
