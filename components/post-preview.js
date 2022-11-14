import Link from 'next/link'
import Author from './author'
import CoverImage from './cover-image'
import DateComponent from './date'

export default function PostPreview({
  cat,
  slug,
  coverImage,
  title,
  date,
  excerpt,
  author,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage cat={cat} slug={slug} url={coverImage.url} title={title} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/${cat}/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <DateComponent dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <Author name={author.name} />
    </div>
  )
}
