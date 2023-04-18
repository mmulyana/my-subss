import { Field, Form, Formik } from 'formik'
import { AuthLayout } from '../../components'
import { loginWithPassword } from '../../service/supabase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/feature/user'
import { BsFillPersonFill } from 'react-icons/bs'
import { IoMdLock } from 'react-icons/io'

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  async function handleSubmit(values) {
    const { data, error } = await loginWithPassword(values)
    dispatch(addUser(data.user))
    navigate('/')
  }

  function handleSignup() {
    navigate('/signup')
  }

  return (
    <AuthLayout>
      <div className='h-screen w-full flex flex-col items-center justify-center'>
        <h1 className='text-slate-500 text-xl font-normal w-full text-left'>Hi there!</h1>
        <p className='text-slate-600 text-2xl font-semibold w-full text-left'>Welcome back</p>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
        >
          <Form className='flex w-full flex-col mt-20'>
            <div className='relative flex bg-white h-12 rounded-t-md'>
              <div className='h-12 w-16 text-lg text-gray-400 flex items-center justify-center'>
                <BsFillPersonFill />
              </div>
              <Field
                name='email'
                type='text'
                className='textfield h-12 rounded-tr-md border-none'
                placeholder='Email'
              />
            </div>
            <div className='relative flex bg-white h-12 rounded-bl-md'>
              <div className='h-12 w-16 text-lg text-gray-400 flex items-center justify-center'>
                <IoMdLock />
              </div>
              <Field
                name='password'
                type='text'
                className='textfield h-12 rounded-br-md border-none'
                placeholder='Password'
              />
            </div>

            <button
              type='submit'
              className='py-4 mt-8 rounded-md bg-violet-700 hover:bg-violet-800 text-white text-sm hover:ring hover:ring-violet-200 hover:ring-opacity-80'
            >
              Sign In
            </button>
          </Form>
        </Formik>
        <button onClick={handleSignup} className='py-4 mt-4 w-full rounded-md bg-slate-700 hover:bg-slate-800 text-white text-sm hover:ring hover:ring-violet-200 hover:ring-opacity-80'>
          Create a new account
        </button>
        <div className='mt-4 py-3 rounded border border-amber-600 bg-amber-100 w-full px-4 text-sm'>
          <p className='text-amber-800/80 mb-2'>Guest account</p>
          <p className='text-amber-800/50'>email <span className='text-amber-800'>guest@mail.com</span></p>
          <p className='text-amber-800/50'>password <span className='text-amber-800'>12345678</span></p>
        </div>
      </div>
    </AuthLayout>
  )
}
