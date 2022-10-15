import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    posiivePercentage: 0,
  };

  onGoodOptionClick = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  onNeurtralOptionClick = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  onBadOptionClick = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <>
        <h1>Feedback widget</h1>
        <section>
          <h2>Please leave your feedback</h2>
          <ul>
            <li>
              <button type="button" onClick={this.onGoodOptionClick}>
                Good
              </button>
            </li>
            <li>
              <button type="button" onClick={this.onNeurtralOptionClick}>
                Neurtral
              </button>
            </li>
            <li>
              <button type="button" onClick={this.onBadOptionClick}>
                Bad
              </button>
            </li>
          </ul>
        </section>
        <section>
          <h2>Statistics</h2>
          <ul>
            <li>
              <p>Good: {this.state.good}</p>
            </li>
            <li>
              <p>Neutral: {this.state.neutral}</p>
            </li>
            <li>
              <p>Bad: {this.state.bad}</p>
            </li>
            <li>
              <p>Total: {() => this.state.total}</p>
            </li>
            <li>
              <p>Positive feedback: {this.state.posiivePercentage}</p>
            </li>
          </ul>
        </section>
      </>
    );
  }
}
