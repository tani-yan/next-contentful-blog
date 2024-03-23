const dotenv = require('dotenv')
const { createClient } = require('contentful')
const richTextPlainTextRenderer = require('@contentful/rich-text-plain-text-renderer')
const algoliasearch = require('algoliasearch/lite')

async function getAllBlogPosts() {
  // write your code to fetch your data
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  })

  const { items } = await client.getEntries({
    content_type: 'post',
    limit: 1000,
  })

  return items
}

function transformPostsToSearchObjects(posts) {
  const transformed = posts.map((post) => {
    return {
      objectID: post.sys.id,
      title: post.fields.title,
      excerpt: post.fields.excerpt,
      slug: post.fields.slug,
      // topicsCollection: { items: post.topicsCollection.items },
      date: post.fields.date,
      // readingTime: post.readingTime,
      content: richTextPlainTextRenderer.documentToPlainTextString(post.fields.content),
    }
  })

  console.log(transformed)

  return transformed
}

(async function () {
  dotenv.config({ path: '.env.local' })

  try {
    const posts = await getAllBlogPosts()
    const transformed = transformPostsToSearchObjects(posts)

    // initialize the client with your environment variables
    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY,
    )

    // initialize the index with your index name
    const index = client.initIndex('next_contentful_blog')

    // save the objects!
    const algoliaResponse = await index.saveObjects(transformed)

    // check the output of the response in the console
    console.log(
      `🎉 Sucessfully added ${algoliaResponse.objectIDs.length} records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
        "\n",
      )}`,
    )
  } catch (error) {
    console.log(error)
  }
})() 
