import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'

function PCard({ product }) {
  const { category, description, image, price, title, rating } = product
  const navigate = useNavigate()

  return (
    <Card
      className="cursor-pointer"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <Card.Img
        variant="top"
        src={image}
        height="250"
        width="auto"
        className="object-fit-contain p-2"
      />
      <Card.Body>
        <Card.Title className="text-primary">{category}</Card.Title>
        <Card.Text className="text-truncate text-dark">{title}</Card.Text>
        <Card.Text className="text-truncate text-secondary">
          {description}
        </Card.Text>
        <Card.Text className="text-info">
          <b>Price: </b>₹{price}
        </Card.Text>
        <Card.Text>
          <div className="d-flex">
            <div className="text-success">
              {' '}
              <b>Rating: </b> {rating?.rate}
            </div>
            <div className="ms-auto text-warning">
              {' '}
              <b>Total users: </b> {rating?.count}
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PCard
