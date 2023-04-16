import { useSelector } from "react-redux"

export default function Navbar() {
  const {user_metadata} = useSelector(s => s.user)

  return (
    <div className='absolute z-50 py-2 w-full top-0 left-0'>
      <div className='container flex justify-between items-center'>
        <div>
          <p>Good Morning</p>
          <p>{user_metadata.username}</p>
        </div>
        <div className='h-9 w-9 rounded-full bg-gray-300'></div>
      </div>
    </div>
  )
}
