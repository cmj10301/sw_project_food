export default function HeartBtn({ count }) {
    return (
      <button className="heart-button">
        <span className="heart-icon">❤</span>
        <span className="heart-count">{count}</span>
      </button>
    );
  }