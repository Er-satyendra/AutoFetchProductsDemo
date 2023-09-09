import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Product } from '@products/Components/Products'
import ProductHeader from '@products/Components/Products/ProductHeader'
import { useGetProducByIdQuery } from '@products/Store/Api/Product/productApi'
import { setLoader } from '@products/Store/Slices/loaderSlice'

export default function ProductDetails() {
  const [fetchInterval, setFetchInterval] = useState(300000)
  const [pastTime, setPastTime] = useState(0)
  const { id } = useParams()
  const dispatch = useDispatch()

  const { data, isError, refetch, isFetching } = useGetProducByIdQuery(id, {
    pollingInterval: fetchInterval,
  })

  useEffect(() => {
    if (isFetching) {
      setPastTime(0)
      dispatch(setLoader(true))
    } else {
      setPastTime(new Date().getTime())
      dispatch(setLoader(false))
    }
  }, [isFetching, dispatch])

  const refresh = () => {
    refetch()
  }

  return (
    <div className="container py-4">
      <div className="py-4 text-primary h4 text-center">
        Product page ( Product Details ) is implemented using
        @reduxjs/toolkit/query/react.
        <hr />
      </div>
      <ProductHeader
        setFetchInterval={setFetchInterval}
        fetchInterval={fetchInterval}
        pastTime={pastTime}
        refresh={(e) => refresh(e)}
      />
      <Product data={data} isError={isError} />
    </div>
  )
}
