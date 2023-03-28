import VoteActions from "./VoteActions/VoteActions";
import VoteResult from "./VoteResult/VoteResult";
import { Component } from "react";
import styles from "./vote.module.scss";

class Vote extends Component {
  state = {
    republicans: 0,
    democrats: 0,
  };

  calcTotal() {
    const { republicans, democrats } = this.state;
    const total = republicans + democrats;
    return total;
  }

  // propName=republicans or democrats
  calcPercent(name) {
    const value = this.state[name];
    const total = this.calcTotal();
    if (total === 0) {
      return 0;
    }
    const result = Math.round((value / total) * 100);
    return result;
  }

  leaveVote = (name) => {
    this.setState((prevState) => {
      const value = prevState[name];
      return { [name]: value + 1 };
    });
  };

  render() {
    const total = this.calcTotal();
    const democratesPercent = this.calcPercent("democrats");
    const republicansPercent = this.calcPercent("republicans");

    return (
      <div className={styles.wrapper}>
        <VoteActions leaveVote={this.leaveVote} />
        <VoteResult
          total={total}
          democratesPercent={democratesPercent}
          republicansPercent={republicansPercent}
        />
      </div>
    );
  }
}
export default Vote;
