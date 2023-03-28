import styles from "../vote.module.scss";
const VoteResult = ({ total, republicansPercent, democratesPercent }) => {
  return (
    <>
      <p>Total votes:{total}</p>
      <p>Republicant: {republicansPercent}</p>
      <p>Democrats: {democratesPercent}</p>
    </>
  );
};
export default VoteResult;
