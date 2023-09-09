import PCard from '@products/Components/Card/Card'
import Error from '@products/Components/Error/Error'

export default function Product({ data, isError }) {
  if (isError) {
    return <Error />
  }
  return data ? <PCard product={data} /> : null
}
