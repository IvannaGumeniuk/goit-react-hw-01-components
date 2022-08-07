import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className={styles.wrapper}>
            {friends.map(({ id, avatar, name, isOnline }) => {
            return (
              <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
            )
          })}
        </ul>
);
};

FriendList.propTypes = {
   id: PropTypes.number.isRequired,
};