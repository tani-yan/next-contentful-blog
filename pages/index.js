import Head from 'next/head'
import Container from '../components/container'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import MoreStories from '../components/more-stories'
import { buildClient } from '../lib/contentful'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  // console.log(allPosts)
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="My Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Intro>Latest</Intro>
        {heroPost && (
          <HeroPost
            slug={heroPost.fields.slug}
            coverImage={heroPost.fields.coverImage.fields.file}
            title={heroPost.fields.title}
            date={heroPost.fields.date}
            excerpt={heroPost.fields.excerpt}
          />
        )}
        {morePosts.length > 0 && (
          <MoreStories heading={'Articles'} posts={morePosts} />
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
  return {
    props: { allPosts: items },
  }
}
