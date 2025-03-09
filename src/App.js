import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div style={{ width: "100vw", height: "100vh" }}>
          <iframe
            title="Boinkers"
            src="https://boinkers.io/"
            frameBorder="0"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
