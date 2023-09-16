const sendMessage = (message) => {
  console.log("sendMessage");
  chrome.runtime.sendMessage(message);
};

export { sendMessage };
