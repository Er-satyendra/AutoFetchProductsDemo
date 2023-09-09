import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import PCard from '@products/Components/Card'
import Error from '@products/Components/Error/Error'
import mainApiService from '@products/Services/apiService'
import { setLoader } from '@products/Store/Slices/loaderSlice'

export default function ProductList({
  fetchInterval,
  setPastTime,
  refreshNow,
  setRefreshNow,
}) {
  const dispatch = useDispatch()
  const { data, error, refetch } = useQuery({
    refetchInterval: fetchInterval,
    refetchOnWindowFocus: false,
    queryKey: ['productData'],
    queryFn: async () => {
      dispatch(setLoader(true))
      setPastTime(0)
      const result = await mainApiService('getProducts')
      setPastTime(new Date().getTime())
      dispatch(setLoader(false))
      return result.data
    },
  })

  useEffect(() => {
    if (refreshNow) refetch()
    setRefreshNow(false)

    // eslint-disable-next-line
  }, [refreshNow])

  if (error) {
    dispatch(setLoader(false))
    return <Error />
  }

  return (
    <div className="row">
      {data?.length > 0 &&
        data.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 pb-4" key={product.id}>
            <PCard product={product} />
          </div>
        ))}
    </div>
  )
}
