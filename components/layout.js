import Header from './header'
import Footer from './footer'
import MenuToggle from './menu-toggle'

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <MenuToggle />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
