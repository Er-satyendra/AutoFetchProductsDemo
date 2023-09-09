import { useQuery } from '@tanstack/react-query'

import { Button } from 'react-bootstrap'
import PSelect from '@products/Components/Select'
import constant from '@products/Helpers/constant'
import timeAgo from '@products/Helpers/utils'

export default function ProductHeader({
  setFetchInterval,
  fetchInterval,
  pastTime,
  refresh,
}) {
  const { data } = useQuery({
    refetchInterval: 1000,
    refetchOnWindowFocus: false,
    queryKey: ['pastTime'],
    queryFn: async () => {
      const result = timeAgo(pastTime)
      return result
    },
  })
  return (
    <div className="row">
      <div className="col-8">
        <div className="d-flex">
          <div>
            <Button variant="outline-primary" onClick={refresh}>
              REFRESH
            </Button>{' '}
          </div>
          {data ? (
            <div className="d-flex align-items-center ms-3 text-danger">
              Fetched {data}
            </div>
          ) : null}
        </div>
      </div>
      <div className="col-4">
        <div className="d-flex mb-5">
          <div>Select time interval to fetch records </div>
          <PSelect
            onSelect={(e) => {
              setFetchInterval(+e.target.value)
            }}
            options={constant.TIME_INTERVAL_OPTIONS}
            value={fetchInterval}
          />
        </div>
      </div>
    </div>
  )
}
