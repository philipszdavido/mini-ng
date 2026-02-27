const htmlparser = require("htmlparser2");

function htmlToIncrementalDOM(html) {
  let incrementalDOMCode = "";

  const handler = new htmlparser.DomHandler(function (error, dom) {
    if (error) {
      // Handle parsing errors here.
    } else {
      function processNode(node) {
        if (node.type === "text") {
          // Handle text nodes
          incrementalDOMCode += `IncrementalDOM.text("${node.data}");\n`;
        } else if (node.type === "tag") {
          // Handle element nodes
          const tagName = node.name;
          const attributes = [];
          for (const attr in node.attribs) {
            if (node.attribs.hasOwnProperty(attr)) {
              attributes.push(attr, node.attribs[attr]);
            }
          }
          incrementalDOMCode += `IncrementalDOM.elementOpen("${tagName}", null, [${attributes
            .map((attr) => `"${attr}"`)
            .join(", ")}]);\n`;
          for (const childNode of node.children) {
            processNode(childNode);
          }
          incrementalDOMCode += `IncrementalDOM.elementClose("${tagName}");\n`;
        }
      }

      for (const node of dom) {
        processNode(node);
      }
    }
  });

  const parser = new htmlparser.Parser(handler);
  parser.write(html);
  parser.end();

  return incrementalDOMCode;
}

const htmlString = `
<div>
<watch-course-content [activeLessonBrandColor]="data?.tenant?.brandTheme?.primaryColor"
[activeLessonIconBrandColor]="data?.tenant?.brandTheme?.accentColor" [playlistMode]="true"
[course]="data.course" [sections]="data.sections" [sectionsLessons]="data.sectionsLessons"
[lessonsWatched]="data.lessonsWatched" [activeLesson]="data.activeLesson"
[sectionLockedIds]="data.sectionLockedIds" [dripAvailabilityDatePerLesson]="data.dripAvailabilityDatePerLesson"
[isAdmin]="data?.isAdmin">

</watch-course-content>

</div>

<!-- for main content -->
<div class="video-panel">

<!-- for right bar -->
<ng-container *ngIf="(lessonData$ | async) as lessonData; else videoLoading">
</ng-container>
</div>
`;
const incrementalDOMCode = htmlToIncrementalDOM(htmlString);
console.log(incrementalDOMCode);
