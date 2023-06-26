import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <section>
      <h3>Statistics</h3>
      {total === 0 ? (
        <p>There is no feedback</p>
      ) : (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {Math.round(positive)}%</p>
        </div>
      )}
    </section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};
