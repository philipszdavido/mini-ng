const { parseDocument } = require('htmlparser2');
const { DomUtils } = require('htmlparser2');

// Define your HTML content
const htmlContent = `
<div>
  @for (let i = 0; i < 10; i++) {
    <p>{{ i }} | pipe</p>
  }
  @if (condition) {
    <span>Condition is true</span>
  }
</div>
`;

// Parse the HTML document
const documentNode = parseDocument(htmlContent);

// Initialize structures to hold detected patterns
const detectedPatterns = {
    for: [],
    if: [],
    pipe: [],
    handlebars: []
};

// Traverse the DOM to find the templating patterns
function traverseDOM(nodes) {
    nodes.forEach(node => {
        if (node.type === 'text') {
            const text = node.data;
            if (/@for/.test(text)) {
                detectedPatterns.for.push(text.trim());
            }
            if (/@if/.test(text)) {
                detectedPatterns.if.push(text.trim());
            }
            if (/\| pipe/.test(text)) {
                detectedPatterns.pipe.push(text.trim());
            }
            if (/{{.*}}/.test(text)) {
                detectedPatterns.handlebars.push(text.trim());
            }
        } else if (node.children) {
            traverseDOM(node.children);
        }
    });
}

// Start traversing from the root
traverseDOM(documentNode.children);

// Log the results
console.log("Detected Patterns:", JSON.stringify(detectedPatterns, null, 2));
