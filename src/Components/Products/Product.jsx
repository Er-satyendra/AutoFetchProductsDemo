import PCard from '@products/Components/Card'
import Error from '@products/Components/Error'

export default function Product({ data, isError }) {
  if (isError) {
    return <Error />
  }
  return data ? <PCard product={data} type="details-page" /> : null
}
