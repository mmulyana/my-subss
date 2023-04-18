import { ErrorMessage, Field, Form, Formik } from 'formik'
import withDrawer from './withDrawer'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../service/supabase'
import { importSubscription } from '../../redux/feature/subscription'
import { BsX } from 'react-icons/bs'

const createSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string(),
  label: Yup.string().required('label is required'),
  price: Yup.number().required('price is required'),
  date: Yup.number().required('date is required'),
  payment_method: Yup.string().required('payment method is required'),
})

const Create = ({ onClose }) => {
  const { id } = useSelector((s) => s.user)
  const dispatch = useDispatch()

  async function handleNewSubss(values, { resetForm }) {
    const { name, description, label, price, date, payment_method } = values
    const { error } = await supabase.from('subscription').insert({
      name,
      description: description || null,
      label,
      price,
      payment_date: date,
      payment_method,
      iduser: id,
    })

    if (!error) {
      const { data } = await supabase
      .from('subscription')
      .select()
      .eq('iduser', id)

      dispatch(importSubscription(data))
      resetForm()
      onClose()
    }
  }

  return (
    <div>
      <div className='flex justify-between items-center absolute top-0 left-0 w-full bg-slate-100 p-2 border-b border-gray-200/90'>
        <h1 className='text-sm text-gray-600'>New Subscription</h1>
        <button
          onClick={onClose}
          className='w-6 h-6 flex items-center justify-center rounded-full text-gray-600 hover:text-red-600'
        >
          <BsX />
        </button>
      </div>
      <div className='mt-8 h-[calc(100vh-148px)] overflow-y-auto px-2 create-form-drawer'>
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
            <ErrorMessage
              name='name'
              component='span'
              className='text-red-500 text-xs'
            />

            <label className='text-slate-800 text-sm mt-3'>Description</label>
            <Field name='description' type='text' className='textfield' />

            <label className='text-slate-800 text-sm mt-3'>Label</label>
            <Field name='label' type='text' className='textfield' />
            <ErrorMessage
              name='label'
              component='span'
              className='text-red-500 text-xs'
            />

            <label className='text-slate-800 text-sm mt-3'>Price</label>
            <Field name='price' type='number' className='textfield' />
            <ErrorMessage
              name='price'
              component='span'
              className='text-red-500 text-xs'
            />

            <label className='text-slate-800 text-sm mt-3'>Payment date</label>
            <Field
              name='date'
              type='number'
              placeholder='1'
              className='textfield'
            />
            <ErrorMessage
              name='date'
              component='span'
              className='text-red-500 text-xs'
            />

            <label className='text-slate-800 text-sm mt-3'>
              Payment Method
            </label>
            <Field
              name='payment_method'
              type='text'
              placeholder='Credit card'
              className='textfield'
            />
            <ErrorMessage
              name='payment_method'
              component='span'
              className='text-red-500 text-xs'
            />

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
