// Initialize Ace Editor
const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

// Function to initialize Yjs
function initializeYjs() {
  // Yjs setup
  const ydoc = new Y.Doc();
  const provider = new WebsocketProvider('ws://localhost:1234', 'my-room', ydoc);
  const yText = ydoc.getText('shared-code');

  // Binding Ace Editor to Yjs
  const binding = new AceBinding(yText, editor);
}

// Wait for all resources to be loaded
if (document.readyState === 'complete') {
  initializeYjs();
} else {
  window.addEventListener('load', initializeYjs);
}
