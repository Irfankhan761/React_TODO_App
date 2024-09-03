import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Todos</h1>
      {/* main con */}
      <div>
        {/* sub1 */}
        <div>
          <input type="text" placeholder="What needs to be done?" />
        </div>
        {/* sub2 */}
        <div>
          <input type="checkbox" />
          <h3>Learn React</h3>
        </div>
        <label>
          Priority ?
          <select>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button>Del</button>
      </div>
    </div>
  );
}

export default App;
