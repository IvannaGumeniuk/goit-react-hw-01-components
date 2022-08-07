import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Stats = ({label, quantity}) => {
  return <li>
    <span className={styles.label}>
      {label}
    </span>
    
    <span className={styles.quantity}>
      {quantity}
    </span>
  </li>;
}

export const Profile = ({ avatar, username, tag, location, stats, followers, views, likes}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} ></img>
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>  
        
      <ul className={styles.stats}>
        <Stats label='Followers' quantity ={stats.followers} />
        <Stats label='Views' quantity={stats.views} />
        <Stats label='Likes' quantity ={stats.likes} />
      </ul>
      
    </div>
    );
};

Profile.propTypes = {
    avatar:  PropTypes.string,
    username:  PropTypes.string.isRequired,
    tag:  PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}