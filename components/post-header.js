import Author from './author'
import CoverImage from './cover-image'
import DateComponent from './date'
import PostTitle from './post-title'

export default function PostHeader({ title, author, coverImage, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        {author && <Author name={author.fields.name} />}
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          {author && <Author name={author.fields.name} />}
        </div>
        <div className="mb-6 text-lg">
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  )
}
