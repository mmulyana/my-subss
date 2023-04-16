import { Field, Form, Formik } from 'formik'
import { AuthLayout } from '../../components'
import { signupWithPassword } from '../../service/supabase'

export default function Register() {
  async function handleSubmit(values) {
    const { message } = signupWithPassword(values)
  }

  return (
    <AuthLayout>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form className='flex flex-col gap-2 mt-20'>
          <label className='text-slate-800 text-sm mt-3'>Username</label>
          <Field name='username' type='text' className='textfield' />
          <label className='text-slate-800 text-sm mt-3'>Email</label>
          <Field name='email' type='text' className='textfield' />
          <label className='text-slate-800 text-sm mt-3'>Password</label>
          <Field name='password' type='text' className='textfield' />
          <button
            type='submit'
            className='py-4 mt-8 rounded bg-violet-700 hover:bg-violet-800 text-white text-sm hover:ring hover:ring-violet-200 hover:ring-opacity-80'
          >
            Sign Up
          </button>
        </Form>
      </Formik>
    </AuthLayout>
  )
}
