import { useState } from "react";

import "./../styles/App.css";
import LinkSubmit from "./LinkSubmit";
import CurrentTweet from "./CurrentTweet";
import { getJobs } from "../utils/localStorage";

function App() {
  const [jobs, setJobsState] = useState(getJobs());
  const jobIds = Object.keys(jobs);

  const props = { jobs, setJobsState };

  return (
    <div className="App">
      <div className="container py-4 px-3 mx-auto text-white">
        {/* <h1>䷼ DeepTrust</h1> */}
        <h2 className="mb-3">𝕏 Buddy</h2>
        <CurrentTweet />
      </div>
    </div>
  );
}

export default App;
