import { Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectLoader } from '@products/Store/Slices/loaderSlice'

function Loader() {
  const loaderState = useSelector(selectLoader)
  if (!loaderState) return null
  return loaderState ? (
    <div className="vw-100 vh-100 loader-spinner d-flex align-items-center justify-content-center postion-absolute">
      <Spinner animation="grow" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : null
}
export default Loader
