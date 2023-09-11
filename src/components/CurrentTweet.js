import { useEffect, useState } from "react";
import { sendMessage } from "../utils/message";
import { launchJob, pollJob } from "../utils/api";
import { setJob } from "../utils/localStorage";
function checkRegex(input) {
  let regex = /https:\/\/twitter\.com\/[A-Za-z0-9]+\/status\/[A-Za-z0-9]+/i;
  return regex.test(input);
}

const CurrentTweet = ({ currentURL }) => {
  const [url, setURL] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleClick = async () => {
    let queryOptions = { active: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log("tab", tab.url);
    /**
     * 1. Add URL to api
     * 2. Add loading
     * 3. Send them to link
     */
  };

  return (
    <div className="mb-3">
      <button
        disabled={disabled}
        className={`btn ${disabled ? "btn-outline-secondary" : "btn-primary"}`}
        type="button"
        id="launch"
        onClick={handleClick}
      >
        Launch Job 🚀
      </button>
    </div>
  );
};

export default CurrentTweet;
