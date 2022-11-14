import PostPreview from './post-preview'

export default function MoreStories({ heading, posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold uppercase leading-tight tracking-tighter md:text-7xl">
        {heading}
      </h2>
      <div className="mb-24 grid grid-cols-2 gap-x-24 gap-y-24">
        {posts.map((post) => (
          <PostPreview
            key={post.sys.id}
            cat={'journal'}
            slug={post.fields.slug}
            coverImage={post.fields.coverImage.fields.file}
            title={post.fields.coverImage.fields.title}
            date={post.fields.date}
            excerpt={post.fields.excerpt}
            author={post.fields.author.fields}
          />
        ))}
      </div>
    </section>
  )
}
