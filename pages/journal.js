import Head from 'next/head'
import Container from '../components/container'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import MoreStories from '../components/more-stories'
import { buildClient } from '../lib/contentful'

export default function Journal({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  // console.log(allPosts)
  return (
    <>
      <Head>
        <title>Journal | im labor</title>
      </Head>
      <Container>
        <Intro>Journal</Intro>
        {heroPost && (
          <HeroPost
            cat="journal"
            slug={heroPost.fields.slug}
            coverImage={heroPost.fields.coverImage.fields.file}
            title={heroPost.fields.title}
            date={heroPost.fields.date}
            excerpt={heroPost.fields.excerpt}
            author={heroPost.fields.author.fields}
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
