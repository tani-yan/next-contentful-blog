import Link from 'next/link'
import Container from './container'
import useScrollDirection from './use-scroll-direction'
import { useRouter } from 'next/router'
import styles from './header.module.css'
import { useMediaQuery } from 'react-responsive'
import { pages } from './navigation'

export default function Header() {
  const scrollDirection = useScrollDirection()
  const router = useRouter()
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  })

  return (
    <header
      className={`top-0 z-30 bg-white transition duration-500 ease-in-out dark:bg-black md:sticky [&.down]:-translate-y-full ${
        isDesktopOrLaptop && scrollDirection === 'down' ? 'down' : ''
      }`}
    >
      <Container>
        <h1></h1>
        <nav className="flex h-16 items-center font-medium">
          <div className="flex w-full">
            <div>
              <Link href="/">
                <a
                  className="align-middle text-2xl font-bold uppercase"
                  title="Go to the homepage"
                >
                  Blog
                </a>
              </Link>
            </div>
            {/* <div className="ml-auto hidden md:block">
              {pages.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a
                    className={`ml-16 p-2 ${styles.link} ${
                      router.pathname.startsWith(link.href)
                        ? styles.current
                        : ''
                    }`}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </div> */}
          </div>
        </nav>
      </Container>
    </header>
  )
}
