import { ErrorMessage, Field, Form, Formik } from 'formik'
import withDrawer from './withDrawer'
import { BsX } from 'react-icons/bs'
import * as Yup from 'yup'

const createSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string(),
  label: Yup.string().required('label is required'),
  price: Yup.number().required('price is required'),
  date: Yup.number().required('date is required'),
  payment_method: Yup.string().required('payment method is required')
})

const Create = ({ onClose }) => {
  async function handleNewSubss(values) {
    console.log(values)
  }

  return (
    <div>
      <button
        onClick={onClose}
        className='absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:text-red-600'
      >
        <BsX />
      </button>
      <h1>New Subscription</h1>
      <div className='mt-4 h-[calc(100vh-148px)] overflow-y-auto px-2 create-form-drawer'>
        <Formik
          initialValues={{
            name: '',
            description: '',
            label: '',
            price: '',
            date: '',
            payment_method: '',
          }}
          validationSchema={createSchema}
          onSubmit={handleNewSubss}
        >
          <Form className='flex flex-col gap-2'>
            <label className='text-slate-800 text-sm mt-3'>Name</label>
            <Field name='name' type='text' className='textfield' />
            <ErrorMessage name='name' component='span' className='text-red-500 text-xs' />

            <label className='text-slate-800 text-sm mt-3'>Description</label>
            <Field name='description' type='text' className='textfield' />

            <label className='text-slate-800 text-sm mt-3'>Label</label>
            <Field name='label' type='text' className='textfield' />
            <ErrorMessage name='label' component='span' className='text-red-500 text-xs' />

            <label className='text-slate-800 text-sm mt-3'>Price</label>
            <Field name='price' type='number' className='textfield' />
            <ErrorMessage name='price' component='span' className='text-red-500 text-xs' />

            <label className='text-slate-800 text-sm mt-3'>Payment date</label>
            <Field
              name='date'
              type='number'
              placeholder='1'
              className='textfield'
            />
            <ErrorMessage name='date' component='span' className='text-red-500 text-xs' />

            <label className='text-slate-800 text-sm mt-3'>
              Payment Method
            </label>
            <Field
              name='payment_method'
              type='text'
              placeholder='Credit card'
              className='textfield'
            />
            <ErrorMessage name='payment_method' component='span' className='text-red-500 text-xs' />

            <div className='absolute bottom-0 left-0 h-16 flex items-center justify-center w-full bg-white z-20'>
              <button
                type='submit'
                className='px-8 py-2 rounded-full bg-violet-700 hover:bg-violet-800 text-white text-sm hover:ring hover:ring-violet-200 hover:ring-opacity-80'
              >
                Save
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

const CreateWithDrawer = withDrawer(Create)

export default CreateWithDrawer
