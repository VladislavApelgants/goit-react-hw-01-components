import PropTypes from 'prop-types';
import changeColor from './change-color';
import s from './Statistics.module.scss';

export default function StatItem({ label, percentage }) {
  return (
    <li className={s.item} style={{ backgroundColor: changeColor() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

StatItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
