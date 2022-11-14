import Image from 'next/image'
import Link from 'next/link'
import Container from './container'
import { nextLoader } from './next-loader'

export default function Header() {
  return (
    <header>
      <Container>
        <h1></h1>
        <nav className="flex h-20 items-center font-medium">
          <div className="flex w-full justify-between uppercase">
            <div>
              <Link href="/">
                <a title="Go to the homepage" className="align-middle">
                  <Image
                    src="/imlabor.svg"
                    width={100}
                    height={18}
                    loader={nextLoader}
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href="/project">
                <a>Project</a>
              </Link>
              <Link href="/journal">
                <a className="ml-24">Journal</a>
              </Link>
              <Link href="/curation">
                <a className="ml-24">Curation</a>
              </Link>
              <Link href="/about">
                <a className="ml-24">About</a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a>JP</a>
              </Link>
              <Link href="/">
                <a className="ml-8">EN</a>
              </Link>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
