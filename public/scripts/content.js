console.log("DeepTrust Content Script Loaded!");
// chrome.runtime.sendMessage({ test: "foo" });
// const btn = document.getElementById("dtSubmit");

// btn.onclick = () => {
//   console.log("here");
// };

// chrome.tabs.getCurrent((tab) => {
//   console.log("test tab: ", tab);
// });

const recieveMessage = (message, sender, res) => {
  console.log("here");
  if (message.type == "start") {
    chrome.runtime.sendMessage({ type: "url" });
  }
};

chrome.tabs.onMessage.addListener(recieveMessage);
