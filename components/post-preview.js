import Link from 'next/link'
import CoverImage from './cover-image'
import DateComponent from './date'
import PostTags from './post-tags'

export default function PostPreview({
  slug,
  coverImage,
  title,
  date,
  category,
  excerpt,
  tags,
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
        <span className="ml-4 inline-block">
          <Link href={`/category/${category.fields.slug}`}>
            <a className="hover:underline">{category.fields.name}</a>
          </Link>
        </span>
      </div>
      <p className="leading-relaxed">{excerpt}</p>
      {tags && <PostTags tags={tags} />}
    </div>
  )
}
