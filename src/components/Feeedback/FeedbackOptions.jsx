import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <section>
      <h2>Please leave feedback</h2>
      <div>
        <button
          className={style.btn}
          type="button"
          id="good"
          onClick={onLeaveFeedback}
        >
          Good
        </button>
        <button
          className={style.btn}
          type="button"
          id="neutral"
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          className={style.btn}
          type="button"
          id="bad"
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </div>
    </section>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func
}