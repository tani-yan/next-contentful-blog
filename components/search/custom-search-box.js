import { connectSearchBox } from 'react-instantsearch-dom'
import { MingcuteSearchLine } from '../icons'

function SearchBox({ refine, currentRefinement }) {
  return (
    <div className="flex flex-auto" role="search">
      <label htmlFor="algolia_search">
        <MingcuteSearchLine className="mr-2.5 mb-0.5 inline-block h-4 w-4 fill-gray-500 text-gray-400" />
      </label>
      <input
        className="flex-auto bg-transparent placeholder-gray-400 outline-none dark:text-gray-400"
        id="algolia_search"
        type="search"
        placeholder="What are you searching for?"
        value={currentRefinement}
        onChange={(e) => refine(e.currentTarget.value)}
        autoComplete="off"
      />
    </div>
  )
}

export default connectSearchBox(SearchBox)
