
const textToType = 'awesome';

function simulateKeyPress(char) {
  const event = new KeyboardEvent('keydown', {
    key: char,
    code: 'Key' + char.toLowerCase(),
    keyCode: char.toLowerCase().charCodeAt(0),
    which: char.toLowerCase().charCodeAt(0),
    shiftKey: false,
  });
  document.dispatchEvent(event);
}

// Wait for the document to be fully loaded before typing.
window.addEventListener('load', function () {
  // Simulate typing "awesome" one character at a time with a slight delay.
  for (let i = 0; i < textToType.length; i++) {
    setTimeout(() => {
      simulateKeyPress(textToType[i]);
    }, i * 100); // Adjust the delay as needed (in milliseconds).
  }
});
