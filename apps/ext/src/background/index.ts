import browser from "webextension-polyfill";

// show welcome page on new install
browser.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    //show the welcome page
    const url = browser.runtime.getURL("welcome/welcome.html");
    browser.tabs.create({ url }).catch(() => {
      // do nothing
    });
  }
});
