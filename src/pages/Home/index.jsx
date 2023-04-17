import { useDispatch, useSelector } from 'react-redux'
import {
  BaseLayout,
  DetailWithDrawer,
  ProductList,
  TotalExpense,
} from '../../components'
import { useEffect, useState } from 'react'
import { supabase } from '../../service/supabase'
import { importSubscription } from '../../redux/feature/subscription'
import { addDetail } from '../../redux/feature/detail'

export default function Home() {
  const { id } = useSelector((s) => s.user)
  const { data } = useSelector((s) => s.subscription)
  const dispatch = useDispatch()
  const [isOpenDetail, setIsOpenDetail] = useState(false)
  const [detailData, setDetailData] = useState({})

  useEffect(() => {
    getData(id)
  }, [id])

  async function getData(id) {
    const { data, error } = await supabase
      .from('subscription')
      .select()
      .eq('iduser', id)

    if (!error) {
      dispatch(importSubscription(data))
    }
  }

  function openDetailData(id) {
    const filterData = data.filter((d) => d.id === id)

    if (!filterData) return

    dispatch(addDetail(filterData[0]))
    openDetail()
  }

  function openDetail() {
    setIsOpenDetail(true)
  }

  function closeDetail() {
    setIsOpenDetail(false)
  }

  return (
    <BaseLayout>
      <TotalExpense />
      <ProductList data={data} openDetailData={openDetailData} />
      <DetailWithDrawer isOpen={isOpenDetail} onClose={closeDetail} />
    </BaseLayout>
  )
}
