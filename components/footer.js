import Container from './container'

export default function Footer() {
  const year = new Date().getUTCFullYear()

  return (
    <footer className="border-t border-l-accent-2  bg-accent-1 dark:bg-black">
      <Container>
        <div className="justify-between py-14 font-medium md:flex">
          <ul className="md:flex">
            <li>Copyright &copy; {year} tani-yan.</li>
          </ul>
          <ul className="mt-8 md:mt-0 md:flex">
            <li>
              <a
                href="https://github.com/tani-yan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
