import Link from 'next/link'

export default function PostCategory({ category }) {
  return (
    <li className="mt-4">
      <Link href={`/category/${category.fields.slug}`}>
        <a className="hover:underline">{category.fields.name}</a>
      </Link>
    </li>
  )
}
