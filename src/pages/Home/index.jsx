import { useSelector } from 'react-redux'
import { BaseLayout, TotalExpense } from '../../components'

export default function Home() {
  
  return (
    <BaseLayout>
      <TotalExpense />
    </BaseLayout>
  )
}
