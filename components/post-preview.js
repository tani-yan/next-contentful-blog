import Link from 'next/link'
import CoverImage from './cover-image'
import DateComponent from './date'

export default function PostPreview({
  slug,
  coverImage,
  title,
  date,
  excerpt,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} url={coverImage.url} title={title} />
      </div>
      <h3 className="mb-3 text-2xl font-bold leading-snug">
        <Link href={`/entry/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="mb-4">
        <DateComponent dateString={date} />
      </div>
      <p className="mb-4 leading-relaxed">{excerpt}</p>
    </div>
  )
}
