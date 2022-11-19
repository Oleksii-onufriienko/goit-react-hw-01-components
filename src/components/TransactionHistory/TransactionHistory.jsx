import css from './TransactionHistory.module.css';    
import PropTypes from 'prop-types';

export default function TransactionHistory({items}) {
    return (
  <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
   {items.map(e => {
       return (
          <tr key={e.id}>
             <td>{e.type}</td>
             <td>{e.amount}</td>
             <td>{e.currency}</td>
          </tr>
       )
    })}
  </tbody>
</table>
    );

}

TransactionHistory.propTypes = {
     items: PropTypes.array,
}