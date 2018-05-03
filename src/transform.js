import lodash from "lodash";
// Do all your transformation work here

const wrapQuotes = str => {
  return ` "${str}"`;
};

// const configTwo = {
//   content: [
//     {
//       type: "row",
//       content: [
//         {
//           type: "component",
//           componentName: "widget-a"
//         },
//         {
//           type: "component",
//           componentName: "widget-b"
//         }
//     }
//   ]
// };

const transform = config => {
  const rowNamesArray = [];

  function getComponentNames(el) {
    if (el.type === "component") {
      rowNamesArray.push(el.componentName);
    }

    if (el.type === "row" && el.hasOwnProperty("content")) {
      // Iterate through each sub-content child and push their names
      el.content.forEach(x => {
        rowNamesArray.push(x.componentName);
      });
    }
  }

  config.content.forEach(el => {
    getComponentNames(el);
  });

  return `"${rowNamesArray.join(" ")}"`;
};

export default transform;
