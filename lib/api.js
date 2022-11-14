import { buildClient } from './contentful'

const client = buildClient()

export async function getPostAndMorePosts(params) {
  const post = await client.getEntries({
    content_type: 'post',
    'fields.slug': params.slug,
  })
  return {
    post,
  }
}
