import PostTag from './post-tag'

export default function PostTags({ tags }) {
  return (
    <ul>
      {tags.map((tag) => (
        <PostTag key={tag.sys.id} tag={tag} />
      ))}
    </ul>
  )
}
