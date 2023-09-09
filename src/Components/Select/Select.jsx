import Form from 'react-bootstrap/Form'

function PSelect({ value, options, onSelect }) {
  return (
    <Form.Select
      aria-label="Default select example"
      value={value}
      onChange={onSelect}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.key}
        </option>
      ))}
    </Form.Select>
  )
}

export default PSelect
