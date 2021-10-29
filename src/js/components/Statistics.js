import PropTypes from 'prop-types';

export default function Statistics({ title, stat }) {
  return (
    <section className="statistics">
      {title ? <h2 className="title">{title}</h2> : null}

      <ul className="stat-list">
        {stat.map(item => (
          <li key={item.id} className="item">
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
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
