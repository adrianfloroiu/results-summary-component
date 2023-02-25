const Result = ({ result }) => {
  return (
    <div className="result">
      <div className="category">
        <img src={result.icon} alt="Category Icon" />
        <p>{result.category}</p>
      </div>
      <p className="score">
        {result.score}
        <span> / 100</span>
      </p>
    </div>
  );
};

export default Result;
