console.log("DeepTrust Service Worker Loaded!");

function checkRegex(input) {
  let regex = /https:\/\/twitter\.com\/[A-Za-z0-9]+\/status\/[A-Za-z0-9]+/i;
  return regex.test(input);
}

const recieveMessage = (req, sender, res) => {
  console.log(req);
  console.log(sender);
  console.log(res);
};

// window.addEventListener("mouseup", () => {
//   console.log("lister mouse up");
//   chrome.runtime.onMessage.addListener(recieveMessage);
// });
chrome.runtime.onMessage.addListener(recieveMessage);

// const tab = getCurrentTab().then((t) => console.log("tab", t));

// async function getCurrentTab() {
//   let queryOptions = { active: true, lastFocusedWindow: true };
//   // `tab` will either be a `tabs.Tab` instance or `undefined`.
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
// }
