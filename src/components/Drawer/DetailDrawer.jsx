import withDrawer from './withDrawer'
import { useSelector, useDispatch } from 'react-redux'
import { BsX } from 'react-icons/bs'
import { supabase } from '../../service/supabase'
import { importSubscription } from '../../redux/feature/subscription'

function Detail({ onClose }) {
  const { data } = useSelector((s) => s.detail)
  const { id: idUser } = useSelector((s) => s.user)
  const dispatch = useDispatch()

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
    } catch (err) {
    }
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
      <div className='w-full py-2 mt-6'>
        <p className='text-2xl text-slate-800'>
          {data.name} {data.id}
        </p>
        <p className='text-slate-500 mt-2 font-light'>{data.description}</p>
        <p className='border border-gray-500 px-4 text-xs rounded-full h-6 inline-flex items-center capitalize mt-4'>
          {data.label}
        </p>
      </div>
      <div className='mt-4'>
        <p className='text-2xl'>Rp. {data.price}</p>
        <p className='text-xs mt-3 text-slate-500'>
          Setiap tanggal{' '}
          <span className='font-semibold text-slate-800'>
            {data.payment_date}
          </span>
        </p>
        <p className='text-xs mt-5 text-slate-400'>Metode Pembayaran</p>
        <p className='text-lg font-semibold text-slate-800'>
          {data.payment_method}
        </p>
      </div>

      <div className='absolute bottom-0 left-0 h-16 w-full flex items-center justify-center'>
        <button
          className='px-8 h-9 flex items-center rounded-full bg-gray-500 hover:bg-red-500 text-white text-sm hover:ring hover:ring-violet-200 hover:ring-opacity-80'
          onClick={() => handleDelete(data.id)}
        >
          Delete Subss
        </button>
      </div>
    </div>
  )
}

const DetailWithDrawer = withDrawer(Detail)
export default DetailWithDrawer
