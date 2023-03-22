import Link from 'next/link'
import { useState } from 'react'
import Container from './container'
import { useRouter } from 'next/router'
import styles from './menu-toggle.module.css'
import { pages } from './navigation'
import { useMediaQuery } from 'react-responsive'

export default function MenuToggle() {
  const [open, setOpen] = useState(false)
  const toggleFunction = () => {
    setOpen((prevState) => !prevState)
  }
  const router = useRouter()
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  })

  return (
    <>
      <button
        className="fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full border border-solid border-black bg-white dark:border-white dark:bg-black md:hidden"
        type="button"
        controles="mobileMenu"
        aria-label={`${open ? 'close' : 'open'} menu`}
        aria-expanded={open}
        onClick={toggleFunction}
      >
        <span
          className={`pointer-events-none flex h-full w-full flex-col items-center justify-center ${
            styles.wrap
          } ${open ? styles.expanded : ''}`}
        ></span>
      </button>
      <nav
        id="mobileMenu"
        className="pointer-events-none invisible fixed top-0 left-0 right-0 z-40 h-screen overflow-y-scroll overscroll-y-none bg-white opacity-0 transition-visibility duration-300 ease-in-out aria-hidden-false:pointer-events-auto aria-hidden-false:visible aria-hidden-false:opacity-100 dark:bg-black"
        aria-hidden={!open}
      >
        <div className="h-[calc(100%+1px)]">
          <Container>
            <div className="flex h-16 items-center">
              <Link href="/">
                <a
                  className="align-middle"
                  title="Go to the homepage"
                  onClick={toggleFunction}
                >
                  {/* <Logo></Logo> */}
                </a>
              </Link>
            </div>
            <ul className="mt-14 text-6xl font-bold uppercase tracking-tighter">
              {pages.map((link) => (
                <li key={link.name} className="">
                  <Link href={link.href}>
                    <a
                      className={`block py-2 ${styles.link} ${
                        router.pathname.startsWith(link.href)
                          ? styles.current
                          : ''
                      }`}
                      onClick={toggleFunction}
                    >
                      <span>{link.name}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </nav>
    </>
  )
}
