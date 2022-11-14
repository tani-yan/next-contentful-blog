import Link from 'next/link'
import Author from './author'
import CoverImage from './cover-image'
import DateComponent from './date'

export default function HeroPost({
  cat,
  slug,
  coverImage,
  title,
  date,
  excerpt,
  author,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage cat={cat} slug={slug} url={coverImage.url} title={title} />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/${cat}/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          {author && <Author name={author.name} />}
        </div>
      </div>
    </section>
  )
}
