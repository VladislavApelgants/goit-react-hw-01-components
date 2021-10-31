import PropTypes from 'prop-types';
import s from './Transaction-history.module.scss';
import TableItem from './Table-item';

export default function TransactionHistroy({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TableItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistroy.propTypes = {
  items: PropTypes.array,
};
