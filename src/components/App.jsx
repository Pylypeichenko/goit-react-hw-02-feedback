import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onOptionClick = e => {
    this.setState(prevState => ({ [e]: (prevState[e] += 1) }));
  };

  onTotalCount = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };

  onPositivePercentageCount = () => {
    return Math.round((this.state.good / this.onTotalCount()) * 100);
  };

  render() {
    this.onTotalCount();
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1>Feedback widget</h1>
        <section>
          <h2>Please leave your feedback</h2>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onOptionClick}
          />
        </section>
        <section>
          <h2>Statistics</h2>
          <ul>
            <li>
              <p>Good: {good}</p>
            </li>
            <li>
              <p>Neutral: {neutral}</p>
            </li>
            <li>
              <p>Bad: {bad}</p>
            </li>
            <li>
              <p>Total: {this.onTotalCount()}</p>
            </li>
            <li>
              <p>Positive feedback: {this.onPositivePercentageCount()}%</p>
            </li>
          </ul>
        </section>
      </>
    );
  }
}
