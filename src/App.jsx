import "./App.css";
import Result from "./Result";
import results from "./data/data.json";

function App() {
  return (
    <div className="App">
      <div className="card">
        <section className="result">
          <h2>Your Result</h2>
          <div className="score-circle">
            <h1>76</h1>
            <p>of 100</p>
          </div>
          <h2 id="score-text">Great</h2>
          <p id="result-description">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </section>
        <section className="summary">
          <h2>Summary</h2>
          {results.map((result) => (
            <Result key={result.id} result={result} />
          ))}
          <button className="continue-button">Continue</button>
        </section>
      </div>
    </div>
  );
}

export default App;
