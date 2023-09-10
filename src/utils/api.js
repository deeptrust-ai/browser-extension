const localDev = "http://localhost:8000/api/";
const modalDev =
  "https://amanmibra--rn-demo-api-modal-serve-dev.modal.run/api/";
const modalProd = "https://amanmibra--rn-demo-api-modal-serve.modal.run/api/";

const URL_PREFIX =
  process.env.NODE_ENV == "development"
    ? process.env.MODAL_DEV
      ? modalDev
      : localDev
    : modalProd;

const launchJob = async (tweetURL) => {
  if (tweetURL == null) {
    throw Error("expected tweetURL");
  }

  const url = URL_PREFIX + "twitter/job?url=" + tweetURL;
  const res = await fetch(url);
  return await res.json();
};

const pollJob = async (id) => {
  const url = apiURLPrefix + `job/${id}`;

  const res = await fetch(url);

  if (res.status == 202) {
    return {
      message: "Job not finished.",
      score: null,
    };
  }

  return await res.json();
};

export { launchJob, pollJob };
