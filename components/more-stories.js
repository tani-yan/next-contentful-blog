import PostPreview from './post-preview'
import PostCategories from './post-categories'
import PostTags from './post-tags'

export default function MoreStories({ posts, categories, tags }) {
  return (
    <section>
      <div className="mb-24 grid grid-cols-1 gap-y-20 md:grid-cols-[1fr_300px] md:gap-y-24 md:gap-x-20">
        <div className="grid grid-cols-1 gap-y-20">
          {posts.map((post) => (
            <PostPreview
              key={post.sys.id}
              cat={'journal'}
              slug={post.fields.slug}
              coverImage={post.fields.coverImage.fields.file}
              title={post.fields.title}
              date={post.fields.date}
              category={post.fields.category}
              excerpt={post.fields.excerpt}
              tags={post.fields.tag}
            />
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-bold uppercase">Categories</h3>
          <PostCategories categories={categories} />
          <h3 className="mt-10 text-2xl font-bold uppercase">Tags</h3>
          <PostTags tags={tags} />
        </div>
      </div>
    </section>
  )
}
