import { Field, Form, Formik } from 'formik'
import withDrawer from './withDrawer'
import { BsX } from 'react-icons/bs'

const Create = ({ isOpen, onClose }) => {
  async function handleNewSubss(values) {}

  return (
    <div className='relative'>
      <button
        onClick={onClose}
        className='absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:text-red-600'
      >
        <BsX />
      </button>
      <h1>New Subscription</h1>
      <div className='mt-2'>
        <Formik initialValues={{isRecurring: false}} onSubmit={handleNewSubss}>
          {({ values, handleChange }) => (
            <Form className='flex flex-col gap-2'>
              <label className='text-slate-800 text-sm mt-3'>Name</label>
              <Field name='name' type='text' className='textfield' />

              <label className='text-slate-800 text-sm mt-3'>Price</label>
              <Field name='price' type='text' className='textfield' />

              <Field name='isRecurring'>
                {({ field }) => (
                  <div className='flex gap-2 items-center'>
                    <input
                      type='checkbox'
                      id='isRecurring'
                      {...field}
                      checked={values.isRecurring}
                      onChange={handleChange}
                      className='checkbox'
                    />
                    <label htmlFor='isRecurring'>Recurring</label>
                  </div>
                )}
              </Field>

              <button
                type='submit'
                className='py-4 mt-8 rounded bg-violet-700 hover:bg-violet-800 text-white text-sm hover:ring hover:ring-violet-200 hover:ring-opacity-80'
              >
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

const CreateWithDrawer = withDrawer(Create)

export default CreateWithDrawer
