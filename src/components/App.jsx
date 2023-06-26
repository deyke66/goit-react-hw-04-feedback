import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feeedback/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  handlerClick = e => {
    this.setState(prev => ({ [e.target.id]: prev[e.target.id] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prev => ({ total: prev.good + prev.neutral + prev.bad }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prev => ({ positive: (prev.good / prev.total) * 100 }));
  };

  render() {
    const { good, neutral, bad, total, positive } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <section title="">
          <FeedbackOptions onLeaveFeedback={this.handlerClick} />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
        </section>
      </div>
    );
  }
}
