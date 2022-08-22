// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {val: 2000}

  onDecrease = value => {
    this.setState(prevState => ({val: prevState.val - value}))
  }

  render() {
    const {denominationsList} = this.props
    const searchResults = denominationsList.filter(each => each.value)
    const {val} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <div className="inner-card">
            <p className="para">S</p>
            <h1 className="head">Sarah Williams</h1>
          </div>
          <div className="inner-card-2">
            <p className="para-2">Your Balance</p>
            <p className="para-3">{val}</p>
          </div>
          <p className="para-4">In Rupees</p>
          <p className="head-2">Withdraw</p>
          <p className="para-5">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {searchResults.map(each => (
              <DenominationItem
                key={each.id}
                denominationsList={each}
                onDecrease={this.onDecrease}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
