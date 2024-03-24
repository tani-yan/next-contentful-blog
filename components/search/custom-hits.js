import { connectStateResults } from 'react-instantsearch-dom'
import Link from 'next/link'

function Hits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 3

  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <p>Aw snap! No search results were found.</p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <ol>
          {searchResults.hits.map((hit) => (
            <li key={hit.objectID}>
              <Link href={`/entry/${hit.slug}`}>
                <a className="underline">{hit.title}</a>
              </Link>
            </li>
            // console.log(hit)
          ))}
        </ol>
      )}
    </>
  );
}

export default connectStateResults(Hits)
