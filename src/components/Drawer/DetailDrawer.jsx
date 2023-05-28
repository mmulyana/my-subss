import withDrawer from './withDrawer'
import { useSelector, useDispatch } from 'react-redux'
import { BsX } from 'react-icons/bs'
import { supabase } from '../../service/supabase'
import { importSubscription } from '../../redux/feature/subscription'
import { changeFormat } from '../../utils'
import { useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { addDetail } from '../../redux/feature/detail'

function Detail({ onClose }) {
  const dispatch = useDispatch()
  const { data } = useSelector((s) => s.detail)
  const { id: idUser } = useSelector((s) => s.user)
  const [isUpdate, setIsUpdate] = useState(false)

  async function handleDelete(id) {
    try {
      const { data, error } = await supabase
        .from('subscription')
        .delete()
        .eq('id', id)

      if (!error) {
        const { data } = await supabase
          .from('subscription')
          .select()
          .eq('iduser', idUser)

        dispatch(importSubscription(data))
        onClose()
      }
    } catch (err) {}
  }

  async function handleUpdate(values) {
    const newData = {
      name: values.name,
      description: values.description,
      label: values.label,
      price: values.price,
      payment_date: values.payment_date,
      payment_method: values.payment_method,
    }

    try {
      const { error } = await supabase
        .from('subscription')
        .update(newData)
        .eq('id', data.id)

      if (!error) {
        const { data } = await supabase
          .from('subscription')
          .select()
          .eq('iduser', idUser)

        dispatch(importSubscription(data))
        updateDetail(data)
        setIsUpdate(false)
      }
    } catch (err) {}
  }

  function updateDetail(alldata) {
    const newDetail = alldata.filter(newData => newData.id === data.id)
    dispatch(addDetail(newDetail[0]))
  }

  if (!data) {
    return null
  }

  return (
    <div>
      <div className='flex justify-between items-center absolute top-0 left-0 w-full bg-slate-100 p-2 border-b border-gray-200/90'>
        <h1 className='text-sm text-gray-600'>Detail Subss</h1>

        <button
          onClick={onClose}
          className='w-6 h-6 flex items-center justify-center rounded-full text-gray-600 hover:text-red-600'
        >
          <BsX />
        </button>
      </div>
      {isUpdate ? (
        <div className='mt-12 h-[calc(100vh-148px)] overflow-y-auto px-2 create-form-drawer'>
          <div className='flex justify-end'>
            <button
              className='text-red-500 text-sm block'
              onClick={() => setIsUpdate(false)}
            >
              cancel
            </button>
          </div>
          <Formik initialValues={data} onSubmit={handleUpdate}>
            <Form className='flex flex-col gap-2'>
              <label className='text-slate-800 text-sm mt-3'>Name</label>
              <Field
                name='name'
                type='text'
                placeholder='e.g. youtube premium'
                className='textfield rounded border border-slate-300'
              />

              <label className='text-slate-800 text-sm mt-3'>Description</label>
              <Field
                name='description'
                type='text'
                placeholder='e.g. Premium plan'
                className='textfield rounded border border-slate-300'
              />

              <label className='text-slate-800 text-sm mt-3'>Label</label>
              <Field
                name='label'
                type='text'
                placeholder='e.g. Entertaiment'
                className='textfield rounded border border-slate-300'
              />

              <label className='text-slate-800 text-sm mt-3'>Price</label>
              <Field
                name='price'
                type='number'
                placeholder='99000'
                className='textfield rounded border border-slate-300'
              />

              <label className='text-slate-800 text-sm mt-3'>
                Payment date
              </label>
              <Field
                name='date'
                type='number'
                placeholder='1'
                className='textfield rounded border border-slate-300'
              />

              <label className='text-slate-800 text-sm mt-3'>
                Payment Method
              </label>
              <Field
                name='payment_method'
                type='text'
                placeholder='e.g. Credit card'
                className='textfield rounded border border-slate-300'
              />

              <label className='text-slate-800 text-sm mt-3'>
                Payment date
              </label>
              <Field
                name='payment_date'
                type='text'
                placeholder='e.g. 2nd june'
                className='textfield rounded border border-slate-300'
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
      ) : (
        <>
          <div className='w-full py-2 mt-12'>
            <p className='text-2xl text-slate-800 capitalize font-semibold'>
              {data.name}
            </p>

            <p className='text-slate-500 mt-2 font-light'>
              {data.description || 'description'}
            </p>
            <p className='border border-gray-500 px-4 text-xs rounded-full h-[25px] pb-[2px] inline-flex items-center capitalize mt-4'>
              {data.label}
            </p>
          </div>
          <div className='mt-8'>
            <p className='text-xs mt-6 text-slate-400'>Jumlah bayar</p>
            <p className='text-2xl font-semibold'>
              {changeFormat(data.price).slice(0, -3)}
            </p>

            <p className='mt-6 text-xs text-slate-400'>Setiap tanggal</p>
            <p className='text-2xl font-semibold text-slate-800'>
              {data.payment_date}
            </p>

            <p className='text-xs mt-5 text-slate-400'>Metode Pembayaran</p>

            <p className='text-2xl font-semibold text-slate-800'>
              {data.payment_method}
            </p>
          </div>
        </>
      )}

      <div className='absolute bottom-0 left-0 h-16 px-4 w-full flex items-center justify-between'>
        <button
          onClick={() => setIsUpdate(!isUpdate)}
          className='px-8 h-9 flex items-center rounded-full text-gray-800 bg-gray-200 hover:bg-slate-800 hover:text-white text-sm hover:shadow border border-transparent hover:border-gray-200'
        >
          Update
        </button>
        <button
          onClick={() => handleDelete(data.id)}
          className='px-8 h-9 flex items-center rounded-full text-red-500 text-sm hover:shadow bg-white border border-transparent hover:border-gray-200'
        >
          Delete
        </button>
      </div>
    </div>
  )
}

const DetailWithDrawer = withDrawer(Detail)
export default DetailWithDrawer
