import Link from 'next/link'
import CoverImage from './cover-image'
import DateComponent from './date'

export default function HeroPost({ slug, coverImage, title, date, excerpt }) {
  return (
    <section>
      <div className="my-8 md:my-16">
        <CoverImage slug={slug} url={coverImage.url} title={title} />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h2 className="mb-4 text-2xl font-bold leading-tight lg:text-4xl">
            <Link href={`/entry/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h2>
          <div className="mb-4 text-lg md:mb-0">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}
