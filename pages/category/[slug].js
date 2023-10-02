import Container from '../../components/container'
import Intro from '../../components/intro'
import MoreStories from '../../components/more-stories'
import { buildClient } from '../../lib/contentful'

export default function Category({
  allPosts,
  allCategories,
  allTagItems,
  slug,
}) {
  const title = `CATEGORY: ${slug.fields.name}`
  return (
    <Container>
      <Intro>{title}</Intro>
      {allPosts.length > 0 && (
        <MoreStories
          heading={title}
          posts={allPosts}
          categories={allCategories}
          tags={allTagItems}
        />
      )}
    </Container>
  )
}

const client = buildClient()

export async function getStaticPaths() {
  const { items } = await client.getEntries({
    content_type: 'category',
  })
  const paths = items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const category = await client.getEntries({
    content_type: 'category',
    'fields.slug': params.slug,
  })
  const post = await client.getEntries({
    content_type: 'post',
    'fields.category.sys.id': category.items[0].sys.id,
    order: '-fields.date',
  })
  const categoryItems = await client.getEntries({
    content_type: 'category',
    order: 'fields.name',
  })
  const tagItems = await client.getEntries({
    content_type: 'tag',
    order: 'fields.name',
  })
  return {
    props: {
      slug: category.items[0],
      allPosts: post.items,
      allCategories: categoryItems.items,
      allTagItems: tagItems.items,
    },
  }
}
