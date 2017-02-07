import React, { Component } from 'react';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };

    this._tick = this._tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this._tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _tick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div className="home">
        <h2>Counter: {this.state.counter}</h2>
      </div>
    );
  }
}

