import lodash from "lodash";
// Do all your transformation work here

const wrapQuotes = str => {
  return `"${str}"`;
};
// const configOne = {
//   content: [
//     {
//       type: "row",
//       content: [
//         {
//           type: "component",
//           componentName: "widget-a"
//         }
//       ]
//     }
//   ]
// };
// get your componentNames from a content array
export const getNamesFromRow = content => {
  // Since recursive, we should check for type of content
  if (Array.isArray(content)) {
    return content.reduce((str, el) => {
      if (el.hasOwnProperty("type") && el.type === "row") {
        return getNamesFromRow(el.content);
      }

      return wrapQuotes(getNamesFromRow(el));
    }, "");
  }

  // Base case should return just the componentName strings
  if (content.type === "component") {
    return content.componentName;
  }
};

// The primary function here, tested in index.test.js
const transform = config => {
  const rootContentArray = config.content;

  const selectedValue = rootContentArray.reduce((finalStr, contentItem) => {
    return contentItem.content[0].componentName;
  }, "");

  // const selectedValue = config.content[0].content[0].componentName;

  return wrapQuotes(selectedValue);
};

export default transform;
