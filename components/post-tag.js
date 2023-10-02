import Link from 'next/link'

export default function PostTag({ tag }) {
  return (
    <li className="mr-4 mt-4 inline-block">
      <Link href={`/tag/${tag.fields.slug}`}>
        <a className="hover:underline">#{tag.fields.name}</a>
      </Link>
    </li>
  )
}
