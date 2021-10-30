import PropTypes from 'prop-types';
import changeColor from './change-color';
import s from './Statistics.module.scss';

export default function Statistics({ title, stat }) {
  return (
    <section className={s.statistics}>
      {title ? <h2 className="title">{title}</h2> : null}

      <ul className={s.statList}>
        {stat.map(item => (
          <li
            key={item.id}
            className={s.item}
            style={{ backgroundColor: changeColor() }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.array,
};
