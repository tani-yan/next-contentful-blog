import Head from 'next/head'
import Container from '../components/container'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import { buildClient } from '../lib/contentful'

export default function Project({ allPosts }) {
  const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  console.log(allPosts)
  return (
    <>
      <Head>
        <title>Project | im labor</title>
      </Head>
      <Container>
        <Intro>Project</Intro>
        {heroPost && (
          <HeroPost
            cat="project"
            slug={heroPost.fields.slug}
            coverImage={heroPost.fields.coverImage.fields.file}
            title={heroPost.fields.title}
            date={heroPost.fields.date}
            excerpt={heroPost.fields.excerpt}
            // author={heroPost.fields.author.fields}
          />
        )}
      </Container>
    </>
  )
}

const client = buildClient()

export async function getStaticProps() {
  const { items } = await client.getEntries({
    content_type: 'project',
    order: '-fields.date',
  })
  return {
    props: { allPosts: items },
  }
}
