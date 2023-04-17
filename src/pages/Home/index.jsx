import { BaseLayout, ProductList, TotalExpense } from '../../components'
import { data } from '../../utils'

export default function Home() {
  return (
    <BaseLayout>
      <TotalExpense />
      <ProductList data={data} />
    </BaseLayout>
  )
}
