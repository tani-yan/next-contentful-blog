import { PoweredBy } from 'react-instantsearch-dom'

function CustomSearchFooter() {
  return (
    <footer className="p-4">
      <PoweredBy
        className="flex items-center justify-end"
        classNames={{
          link: 'MyCustomPoweredByLink MyCustomPoweredByLink--subclass',
        }}
      />
    </footer>
  )
}

export default CustomSearchFooter
