import { useState } from "react";
import { sendMessage } from "../utils/message";
import { launchJob, pollJob } from "../utils/api";
import { setJob } from "../utils/localStorage";
function checkRegex(input) {
  let regex = /https:\/\/twitter\.com\/[A-Za-z0-9]+\/status\/[A-Za-z0-9]+/i;
  return regex.test(input);
}

const LinkSubmit = ({ jobs, setJobsState }) => {
  const [url, setURL] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleTextInput = (e) => {
    const newURL = e.target.value;
    setURL(newURL);
    if (checkRegex(newURL)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleSubmit = async () => {
    console.log("submit");
    const data = await launchJob(url);
    const job = {
      ...data,
      url,
    };

    // set localStorage
    setJob(job.id, job);

    const updateJobsValue = { [job.id]: job };
    setJobsState((jobs) => ({
      ...jobs,
      ...updateJobsValue,
    }));
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Tweet URL"
        aria-label="tweet url"
        onInput={handleTextInput}
      />
      <button
        disabled={disabled}
        className={`btn ${disabled ? "btn-outline-secondary" : "btn-primary"}`}
        type="button"
        id="dtSubmit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default LinkSubmit;
