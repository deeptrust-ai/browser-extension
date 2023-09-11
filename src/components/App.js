import logo from "./../assets/logo.svg";
import "./../styles/App.css";
import LinkSubmit from "./LinkSubmit";

function App() {
  return (
    <div className="App">
      <div className="container py-4 px-3 mx-auto">
        <h1>DeepTrust</h1>
        <h2 className="mb-3">Twitter Buddy</h2>
        <LinkSubmit />
      </div>
    </div>
  );
}

export default App;
