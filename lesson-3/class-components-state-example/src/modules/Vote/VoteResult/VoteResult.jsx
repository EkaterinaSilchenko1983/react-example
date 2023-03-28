import styles from "../vote.module.scss";
const VoteResult = ({ total, republicansPercent, democratesPercent }) => {
  return (
    <div className={styles.block}>
      <h4 className={styles.blockTitle}>Results</h4>
      <p>Total votes:{total}</p>
      <p>Republicant: {republicansPercent}</p>
      <p>Democrats: {democratesPercent}</p>
    </div>
  );
};
export default VoteResult;
