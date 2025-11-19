console.log('HELLO FROM code.js!'); // Add this line

figma.showUI(__html__, {
  width: 1033,
  height: 200,
  title: "Import Tools",
});

figma.ui.onmessage = msg => {
  if (msg.type === 'import-file') {
    console.log('UI wants to import a file!');
  }

  if (msg.type === 'close-plugin') {
    figma.closePlugin();
  }
};