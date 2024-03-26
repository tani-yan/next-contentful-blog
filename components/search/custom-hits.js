import { connectStateResults, Highlight } from 'react-instantsearch-dom'
import CustomSearchFooter from './custom-search-footer'
import Link from 'next/link'

function Hits({ searchState, searchResults, onClick }) {
  const validQuery = searchState.query?.length >= 3

  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <>
          <p className="border-y border-gray-200 px-6 py-4 dark:border-gray-700">
            Aw snap! No search results were found.
          </p>
          <CustomSearchFooter />
        </>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <>
          <ol className="border-y border-gray-200 p-4 dark:border-gray-700">
            {searchResults.hits.map((hit) => (
              <li key={hit.objectID}>
                <Link href={`/entry/${hit.slug}`}>
                  <button
                    className="flex w-full flex-auto items-center rounded-md p-2 text-left hover:bg-[#0000000d]"
                    onClick={onClick}
                  >
                    <Highlight
                      attribute="title"
                      hit={hit}
                      tagName="mark"
                      classNames={{
                        highlighted: 'text-red-500',
                      }}
                    />
                  </button>
                </Link>
              </li>
            ))}
          </ol>
          <CustomSearchFooter />
        </>
      )}
    </>
  )
}

export default connectStateResults(Hits)
