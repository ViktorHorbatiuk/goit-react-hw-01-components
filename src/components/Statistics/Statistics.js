import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statisticsStyles}>
      {title && <h2 className={css.titleStyles}>{title.toUpperCase()}</h2>}

      <ul className={css.statisticListStyles}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={css.itemStyles} key={id}>
              <span className={css.labelStyles}>{label}</span>
              <span className={css.percentageStyles}>{percentage}%</span>
            </li>
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
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
