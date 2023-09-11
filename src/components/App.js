import { useState } from "react";

import "./../styles/App.css";
import LinkSubmit from "./LinkSubmit";
import { getJobs } from "../utils/localStorage";

function App() {
  const [jobs, setJobsState] = useState(getJobs());
  const jobIds = Object.keys(jobs);

  const props = { jobs, setJobsState };

  return (
    <div className="App">
      <div className="container py-4 px-3 mx-auto">
        <h1>DeepTrust</h1>
        <h2 className="mb-3">Twitter Buddy</h2>
        <LinkSubmit {...props} />
        {jobIds.map((id) => {
          const job = jobs[id];
          console.log(job);
          return <div>{job.id}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
