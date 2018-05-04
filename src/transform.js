// import lodash from "lodash";
import { stringifyMultiRows } from "./stringifyRow";

/**
 * The goal is to take a `golden-layout` config object,
 * evaluating it for its rows (however nested), and preserve
 * its layout, mapping it to a layout (template string) that
 * can be used in a CSS grid (grid-template-area).
 *
 * We can use arrays to represent the row/matrix structure.
 */

// content: [
//   {
//     type: "row",
//     content: [
//       {
//         type: "component",
//         componentName: "widget-a"
//       },
//       {
//         type: "column",
//         content: [
//           {
//             type: "component",
//             componentName: "widget-b"
//           },
//           {
//             type: "component",
//             componentName: "widget-c"
//           }
//         ]
//       }
//     ]
//   }
// ]
// };

const transform = config => {
  const rowNamesArray = [];
  let maxWidthOfRootRow = null;

  // TODO: Refactor recursive function
  function getComponentNames(el) {
    if (el.type === "component") {
      rowNamesArray.push(el.componentName);
    }

    if (el.type === "row" && el.hasOwnProperty("content")) {
      maxWidthOfRootRow = el.content.length;
      // Iterate through each sub-content child and push their names
      rowNamesArray.push(el.content.map(x => x.componentName));
    }
  }

  // NOTE: Can this be pulled into the recursive fn?
  config.content.forEach(el => {
    getComponentNames(el);
    console.log(maxWidthOfRootRow);
  });

  return stringifyMultiRows(rowNamesArray);
};

export default transform;
