const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

// Yjs setup
const ydoc = new Y.Doc();
const provider = new Y.WebsocketProvider('ws://localhost:1234', 'my-room', ydoc);
const yText = ydoc.getText('shared-code');

// Binding Ace Editor to Yjs
const binding = new Y.AceBinding(yText, editor);
