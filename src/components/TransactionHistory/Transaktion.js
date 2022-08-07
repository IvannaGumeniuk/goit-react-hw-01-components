import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const Transaction = ({type, amount, currency }) => {
    return (
        <tr className={styles.tableRow}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
};

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};