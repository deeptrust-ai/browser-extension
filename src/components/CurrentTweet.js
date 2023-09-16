import { useEffect, useState } from "react";
import { sendMessage } from "../utils/message";
import { launchJob, pollJob } from "../utils/api";
import { setJob } from "../utils/localStorage";
function checkRegex(input) {
  let regex = /https:\/\/twitter\.com\/[A-Za-z0-9]+_\/status\/[A-Za-z0-9]+/i;
  return regex.test(input);
}

const CurrentTweet = () => {
  const [url, setURL] = useState();
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [jobID, setJobID] = useState();

  useEffect(() => {
    const checkURL = async () => {
      let queryOptions = { active: true };
      // `tab` will either be a `tabs.Tab` instance or `undefined`.
      let [tab] = await chrome.tabs.query(queryOptions);
      const { url } = tab;
      if (checkRegex(url)) {
        setURL(url);
        setDisabled(false);
      } else {
        setURL(null);
        setDisabled(true);
      }
    };
    checkURL();
  }, []);

  const handleClick = async () => {
    setLoading(true);
    const data = await launchJob(url);
    console.log("job id: ", data.id);
    setLoading(false);
    setJobID(data.id);
  };

  return (
    <div className="d-flex flex-column mb-3 justify-content-center align-items-center row-gap-3">
      <button
        disabled={disabled}
        className={`btn ${
          disabled ? "btn-outline-light border-danger" : "btn-success"
        }`}
        type="button"
        id="launch"
        onClick={handleClick}
      >
        Launch Job 🚀
      </button>
      {loading && (
        <div class="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {jobID && (
        <div>
          <p>Job is ready at:</p>
          <button
            disabled={disabled}
            className={`btn btn-primary`}
            type="button"
            onClick={() =>
              chrome.tabs.create({ url: `https://deeptrust.gg/job/${jobID}` })
            }
          >
            ䷼ DeepTrust
          </button>
        </div>
      )}
    </div>
  );
};

export default CurrentTweet;
