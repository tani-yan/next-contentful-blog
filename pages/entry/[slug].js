import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import { buildClient } from '../../lib/contentful'

export default function Post({ post, morePosts }) {
  // const router = useRouter()
  // if (!router.isFallback && !posts[0].fields.slug) {
  //   return <ErrorPage statusCode={404} />
  // }
  // const post = posts[0]
  // console.log(morePosts)
  const title = `${post.fields.title} | Blog`
  return (
    <>
      <Container>
        <article className="mb-32">
          <Head>
            <title>{title}</title>
          </Head>
          <PostHeader
            title={post.fields.title}
            coverImage={post.fields.coverImage.fields.file}
            date={post.fields.date}
          />
          <PostBody content={post.fields.content} about={post.fields.about} />
        </article>
        <SectionSeparator />
        {morePosts && morePosts.length > 0 && (
          <MoreStories heading={'Related articles'} posts={morePosts} />
        )}
      </Container>
    </>
  )
}

const client = buildClient()

export async function getStaticPaths() {
  const { items } = await client.getEntries({
    content_type: 'post',
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
  const post = await client.getEntries({
    content_type: 'post',
    'fields.slug': params.slug,
  })
  const morePosts = await client.getEntries({
    content_type: 'post',
    order: '-fields.date',
    'fields.slug[ne]': params.slug,
    limit: 2,
  })
  return {
    props: { post: post.items[0], morePosts: morePosts.items },
  }
}
