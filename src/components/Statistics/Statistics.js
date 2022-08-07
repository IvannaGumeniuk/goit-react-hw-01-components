import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import {StatisticItem} from './StatisticItem';


export const Statistics = ({ title, stats }) => {
    return (
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.stat_list}> 
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticItem key={id} label={label} percentage={percentage} />
            );
        })}
        </ul>
      </section>
    );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
  ),
};