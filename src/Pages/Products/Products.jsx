import { useState } from 'react'

import ProductList from '@products/Components/Products'
import ProductHeader from '@products/Components/Products/ProductHeader'

export default function Products() {
  const [fetchInterval, setFetchInterval] = useState(300000)
  const [pastTime, setPastTime] = useState(0)
  const [refreshNow, setRefreshNow] = useState(true)
  const refresh = () => {
    setRefreshNow(true)
  }

  return (
    <div className="container py-4">
      <div className="py-4 text-primary h4 text-center">
        Products page ( Product List ) is implemented using react-query.
        <hr />
      </div>
      <ProductHeader
        setFetchInterval={setFetchInterval}
        fetchInterval={fetchInterval}
        pastTime={pastTime}
        refresh={(e) => refresh(e)}
      />
      <ProductList
        fetchInterval={fetchInterval}
        refresh={refresh}
        setPastTime={setPastTime}
        refreshNow={refreshNow}
        setRefreshNow={setRefreshNow}
      />
    </div>
  )
}
