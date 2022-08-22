// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationsList, onDecrease} = props
  const {value} = denominationsList
  const onButton = () => {
    onDecrease(value)
  }
  return (
    <li className="list">
      <button type="button" onClick={onButton}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
