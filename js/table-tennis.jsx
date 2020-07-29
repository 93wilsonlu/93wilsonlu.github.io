

'use strict';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col d-flex justify-content-center">
        <div className="score bg-white border border-dark rounded w-100 text-center">
          {Math.floor(this.props.score / 10)}
        </div>
        <div className="score bg-white border border-dark rounded w-100 text-center">
          {this.props.score % 10}
        </div>
      </div>
    );
  }
}

class ScoreBoards extends React.Component {
  constructor() {
    super();
    this.state = {
      left_score: 0,
      right_score: 0,
      addButtonDisabled: false,
      billboardString: 'Welcome to the Table Tennis'
    };
    this.resetScore = this.resetScore.bind(this);
    this.addScore_and_check = this.addScore_and_check.bind(this);
  }
  resetScore() {
    this.setState({
      left_score: 0,
      right_score: 0,
      addButtonDisabled: false,
      billboardString: 'Welcome to the Table Tennis'
    });
  }
  addScore_and_check(direction) {
    eval(`this.setState({
      ${direction}_score: this.state.${direction}_score + 1
    })`);
    console.log(eval(`this.state.${direction}_score`));
    if (eval(`this.state.${direction}_score`) >= 10) {
      this.setState({
        addButtonDisabled: true,
        billboardString: `${direction} Player Win!`
      });
    }
  }
  render() {
    return (
      <div className="container-fluid px-4" style={{ height: "100%" }}>
        <div className="row display-3 mt-2 mb-4 justify-content-center">
          {this.state.billboardString}
        </div>
        <div className="row bg-secondary my-4 py-3 rounded">
          <ScoreBoard score={this.state.left_score} />
          <ScoreBoard score={this.state.right_score} />
        </div>
        <div className="row justify-content-between mt-10"
          style={{ height: 120 }}>
          <button
            className="btn rounded btn-danger"
            style={{ width: 130 }}
            onClick={this.addScore_and_check.bind(this, "left")}
            disabled={this.state.addButtonDisabled}
          />
          <button className="btn rounded btn-primary text-center px-4"
            style={{ fontSize: 80 }}
            onClick={this.resetScore}>
            Reset
          </button>
          <button
            className="btn rounded btn-success"
            style={{ width: 120 }}
            onClick={this.addScore_and_check.bind(this, "right")}
            disabled={this.state.addButtonDisabled}
          />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<ScoreBoards />, document.getElementById("root"));
alert('fin');
