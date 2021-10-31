import PropTypes from 'prop-types';
import StatItem from './Stat-item';
import s from './Statistics.module.scss';

export default function Statistics({ title, stat }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={s.statList}>
        {stat.map(item => (
          <StatItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.array,
};
