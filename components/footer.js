import Container from './container'

export default function Footer() {
  return (
    <footer className="border-t border-l-accent-2  bg-accent-1 dark:bg-black">
      <Container>
        <div className="flex justify-between py-14 font-medium">
          <ul className="flex">
            <li>im labor is an artist collective founded in 2017.</li>
            <li className="pl-6">Copyright &copy; 2022 im labor.</li>
          </ul>
          <ul className="flex uppercase">
            <li>
              <a
                href="mailto:info@imlabor.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                contact
              </a>
            </li>
            <li className="pl-8">
              <a
                href="https://www.instagram.com/imlabor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
