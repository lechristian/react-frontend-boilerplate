import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { increase, decrease } from '../actions/count';


class Home extends Component {
  constructor(props) {
    super(props);

    this._tick = this._tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this._tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _tick() {
    this.props.onTick(1);
  }

  render() {
    return (
      <div className="home">
        <h2>Counter: {this.props.number}</h2>
        <button
          onClick={() => {
            this.props.onDecreaseClick(2);
          }}
        >
          Decrease
        </button>
        <button
          onClick={() => {
            this.props.onIncreaseClick(2);
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}

Home.propTypes = {
  number: PropTypes.number.isRequired,
  onTick: PropTypes.func.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onDecreaseClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  number: state.count.number,
});

const mapDispatchToProps = (dispatch) => ({
  onTick: (n) => {
    dispatch(increase(n));
  },
  onIncreaseClick: (n) => {
    dispatch(increase(n));
  },
  onDecreaseClick: (n) => {
    dispatch(decrease(n));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

