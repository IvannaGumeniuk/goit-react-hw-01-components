import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import { Transaction } from './Transaktion';


export const TransactionHistory = ({ items }) => {
    return (
    <table class="transaction-history">
        <thead>
            <tr className={styles.columnName}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
                {items.map(({ id, type, amount, currency}) => {
                    return (
                        <Transaction key={id} type={type} amount={amount} currency={currency} />
                    )
                }
                )}
                
                
        </tbody>
    </table>     
    );
};

TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
};