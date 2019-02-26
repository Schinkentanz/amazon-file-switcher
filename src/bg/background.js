chrome.webRequest.onBeforeRequest.addListener(
  ({ method, url }) => {
    if (method === 'GET' && !/smile\.amazon\.de/.test(url)) {
      chrome.notifications.create('switch-to-smile-' + Date.now(), {
        type: 'basic',
        iconUrl: 'icons/icon128.png',
        title: 'amazon.de',
        message: 'Switched from amazon to smile.amazon'
      }, (notificationId) => {});
      return {
        redirectUrl: url.replace('www.amazon.de', 'smile.amazon.de')
      };
    }
  },
  { urls: [] },
  [ 'blocking' ]
);
