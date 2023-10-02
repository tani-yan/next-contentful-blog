import Head from 'next/head'
import Container from '../components/container'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import MoreStories from '../components/more-stories'
import { buildClient } from '../lib/contentful'

export default function Index({ allPosts, allCategories, allTagItems }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="My Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Intro>LATEST</Intro>
        {heroPost && (
          <HeroPost
            slug={heroPost.fields.slug}
            coverImage={heroPost.fields.coverImage.fields.file}
            title={heroPost.fields.title}
            date={heroPost.fields.date}
            category={heroPost.fields.category}
            tags={heroPost.fields.tag}
            excerpt={heroPost.fields.excerpt}
          />
        )}
        <h2 className="mb-16 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
          ARTICLES
        </h2>
        {morePosts.length > 0 && (
          <MoreStories
            posts={morePosts}
            categories={allCategories}
            tags={allTagItems}
          />
        )}
      </Container>
    </>
  )
}

const client = buildClient()

export async function getStaticProps() {
  const { items } = await client.getEntries({
    content_type: 'post',
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
  // console.log(tagItems.items)
  return {
    props: {
      allPosts: items,
      allCategories: categoryItems.items,
      allTagItems: tagItems.items,
    },
  }
}
