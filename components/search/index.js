import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'
import CustomSearchBox from './custom-search-box'
import CustomHits from './custom-hits'
import { useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MingcuteSearchLine } from '../icons'
import { useHotkeys } from 'react-hotkeys-hook'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
)

export default function Search() {
  let [isOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  useHotkeys('meta+k', () => {
    isOpen ? closeModal() : openModal()
  })

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="hover:bg-[black/30] flex w-48 cursor-text justify-between rounded-md bg-[#0000000d] px-2 py-2 text-left text-sm font-medium text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 dark:bg-[#fefefe19]"
      >
        <div className="flex items-center">
          <MingcuteSearchLine className="mr-2 ml-1 mt-0.5 inline-block h-4 w-4 fill-gray-500" />
          Search...
        </div>
        <div>
          <span className="rounded border border-gray-200 bg-white px-1 text-xs dark:border-gray-600 dark:bg-black dark:text-white">
            ⌘ K
          </span>
        </div>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-50 overflow-y-auto bg-white bg-opacity-80 backdrop-blur-sm dark:bg-black dark:bg-opacity-80" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed top-[15%] left-1/2 z-50 flex w-full max-w-2xl -translate-x-1/2 justify-center p-4">
              <Dialog.Panel className="w-full rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-[#0a0a0a]">
                <InstantSearch
                  searchClient={searchClient}
                  indexName="next_contentful_blog"
                >
                  <Dialog.Title
                    as="header"
                    className="flex justify-between p-4"
                  >
                    <CustomSearchBox />
                    <button
                      type="reset"
                      aria-label="Esc"
                      onClick={closeModal}
                      className="rounded border border-gray-200 px-1 text-xs dark:border-gray-700"
                    >
                      Esc
                    </button>
                  </Dialog.Title>
                  <CustomHits onClick={closeModal} />
                </InstantSearch>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
