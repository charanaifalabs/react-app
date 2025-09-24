import "./App.css";
import Counter from "./components/Counter";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <div
        className="card"
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <Counter />
        <Timer />
      </div>
    </>
  );
}

export default App;
