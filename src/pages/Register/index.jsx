import { Field, Form, Formik } from 'formik'
import { AuthLayout } from '../../components'
import { signupWithPassword } from '../../service/supabase'
import { useNavigate } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import { IoMdLock } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()

  async function handleSubmit(values) {
    signupWithPassword(values)
    navigate('/signin')
  }

  return (
    <AuthLayout>
      <div className='h-screen w-full flex flex-col items-center justify-center'>
        <h1 className='text-slate-600 text-xl font-semibold w-full text-left'>
          Create Account
        </h1>

        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          onSubmit={handleSubmit}
        >
          <Form className='flex flex-col w-full mt-8'>
            <div className='relative flex bg-white h-16 rounded-t-md'>
              <div className='h-12 w-16 text-lg text-gray-400 flex items-center justify-center'>
                <IoMdLock />
              </div>
              <Field
                name='username'
                type='text'
                className='textfield h-16 rounded-tr-md border-none'
                placeholder='Username'
              />
            </div>

            <div className='relative flex bg-white h-16'>
              <div className='h-12 w-16 text-lg text-gray-400 flex items-center justify-center'>
                <BsFillPersonFill />
              </div>
              <Field
                name='email'
                type='text'
                className='textfield h-16 border-none'
                placeholder='Email'
              />
            </div>

            <div className='relative flex bg-white h-16 rounded-bl-md'>
              <div className='h-16 w-16 text-lg text-gray-400 flex items-center justify-center'>
                <IoMdLock />
              </div>
              <Field
                name='password'
                type='text'
                className='textfield h-16 rounded-br-md border-none'
                placeholder='Password'
              />
            </div>
            <button
              type='submit'
              className='py-4 mt-8 rounded bg-violet-700 hover:bg-violet-800 text-white text-sm hover:ring hover:ring-violet-200 hover:ring-opacity-80'
            >
              Sign Up
            </button>
          </Form>
        </Formik>
        <div className='w-full mt-4 text-center'>
          <p className='text-sm text-gray-400'>
            Already have a account?{' '}
            <Link className='text-gray-700 font-semibold' to='/signin'>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}
