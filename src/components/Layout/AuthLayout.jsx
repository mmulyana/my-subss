export default function AuthLayout({ children }) {
  return (
    <div className='max-w-[420px] mx-auto relative px-4'>
      <main>{children}</main>
    </div>
  )
}
