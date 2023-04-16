import Navbar from '../Navbar'

export default function BaseLayout({ children }) {
  return (
    <div className='max-w-[800px] mx-auto relative'>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
