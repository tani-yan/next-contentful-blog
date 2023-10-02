import PostCategory from './post-category'

export default function PostCategories({ categories }) {
  return (
    <ul>
      {categories.map((category) => (
        <PostCategory key={category.sys.id} category={category} />
      ))}
    </ul>
  )
}
