const { Component } = require("react");

class Statistics extends Component {
  

  render() {
    return(
    <>
        {/*<h1>Please leave feedback</h1>
        <button onClick={this.hdrInc}>Good</button>
        <button onClick={this.hdrInc}>Neutral</button>
        <button onClick={this.hdrInc}>Bad</button>*/}
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>
        <p>Total: {this.props.total}</p>
        <p>Positive feedback: {this.props.positivePercentage}%</p>
    </>
    );
  }
}

export default Statistics
