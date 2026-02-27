const IncrementalDOM = require("incremental-dom");

const htmlString = '<div id="myDiv">Hello, Incremental DOM!</div>';

function htmlToIncrementalDOM(html) {
  IncrementalDOM.elementOpen("div", null, ["id", "myDiv"]);
  IncrementalDOM.text("Hello, Incremental DOM!");
  IncrementalDOM.elementClose("div");
}

// Use the function to render Incremental DOM elements
IncrementalDOM.patch(document.getElementById("app"), htmlToIncrementalDOM);
