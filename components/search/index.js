import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Hits } from 'react-instantsearch-dom'
import CustomSearchBox from './custom-search-box'
import CustomHits from './custom-hits'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
)

export default function Search() {
  return (
    <>
      <InstantSearch 
        searchClient={searchClient} 
        indexName="next_contentful_blog"
      >
        <CustomSearchBox />
        <CustomHits />
      </InstantSearch>
    </>
  )
}
