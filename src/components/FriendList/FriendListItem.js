import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <li className={styles.item}>
            <span className={styles.status + ' ' + (isOnline ? styles.statusOnline : styles.statusOfline)}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" />
            <p className={styles.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};