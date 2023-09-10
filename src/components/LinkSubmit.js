import { useState } from "react";

function checkRegex(input) {
  let regex = /https:\/\/twitter\.com\/[A-Za-z0-9]+\/status\/[A-Za-z0-9]+/i;
  return regex.test(input);
}

const LinkSubmit = () => {
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
        id="submit"
      >
        Submit
      </button>
    </div>
  );
};

export default LinkSubmit;
