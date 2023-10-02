import Link from 'next/link'
import CoverImage from './cover-image'
import DateComponent from './date'
import PostTitle from './post-title'

export default function PostHeader({ title, coverImage, date, category }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 text-lg">
          <DateComponent dateString={date} />
          <span className="ml-4 inline-block">
            <Link href={`/category/${category.fields.slug}`}>
              <a className="hover:underline">{category.fields.name}</a>
            </Link>
          </span>
        </div>
      </div>
    </>
  )
}
