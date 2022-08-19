export default function Die({ value, isHeld, id, holdDie }) {
  const styles = {
    backgroundColor: isHeld ? '#59E391' : '#FFFFFF',
  };

  return (
    <div className="die-face" style={styles} onClick={() => holdDie(id)}>
      <h2 className="die-num">{value}</h2>
    </div>
  );
}
