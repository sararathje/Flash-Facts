(function(chrome) {
  chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.windows.create({
      url: "./build/index.html",
      type: "popup",
      focused: true,
      state: "maximized"
    });
  });
})(chrome);