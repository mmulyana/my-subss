import Navbar from '../Navbar'

export default function BaseLayout({ children }) {
  return (
    <div className='max-w-[600px] mx-auto relative'>
      <Navbar />
      <main className='mt-16'>{children}</main>
    </div>
  )
}
