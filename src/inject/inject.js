const { href } = window.location;

chrome.extension.sendMessage({ href }, ({ switchToSmile }) => {
  if (switchToSmile) {
    window.location.href = href.replace('www.amazon.de', 'smile.amazon.de');
  }
});
