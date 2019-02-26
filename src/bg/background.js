chrome.extension.onMessage.addListener(({ href }, sender, sendResponse) => {
  const switchToSmile = !/smile\.amazon\.de/.test(href);
  if (switchToSmile) {
    chrome.notifications.create('switch-to-smile-' + Date.now(), {
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: 'amazon.de',
      message: 'Switched from amazon to smile.amazon'
    }, (notificationId) => {});
  }
  sendResponse({ switchToSmile });
});
