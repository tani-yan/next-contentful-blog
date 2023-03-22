export default function Intro({ children }) {
  return (
    <section>
      <h1 className="my-16 text-6xl font-bold uppercase tracking-tighter md:text-7xl">
        {children}
      </h1>
    </section>
  )
}
