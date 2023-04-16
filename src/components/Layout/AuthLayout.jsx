export default function AuthLayout({ children }) {
  return (
    <div className='max-w-[420px] mx-auto relative'>
      <main>{children}</main>
    </div>
  )
}
