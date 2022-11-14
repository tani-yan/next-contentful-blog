export default function Intro({ children }) {
  return (
    <section>
      <h1 className="my-16 font-bold uppercase text-8xl tracking-tighter">
        {children}
      </h1>
    </section>
  )
}
