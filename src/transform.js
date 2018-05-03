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

export const buildStringFromRow = content => {
  // This is only here to trim off the empty whitespace on the ends of the strings
  return lodash.trim(getNamesFromRow(content));
};

// get your componentNames from a content array
const getNamesFromRow = content => {
  // Since recursive, we should check for type of content
  if (Array.isArray(content)) {
    return content.reduce((str, el, index) => {
      if (el.hasOwnProperty("type") && el.type === "row") {
        return getNamesFromRow(el.content);
      }

      return str + wrapQuotes(getNamesFromRow(el));
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
    return buildStringFromRow(contentItem.content);
  }, "");

  // const selectedValue = config.content[0].content[0].componentName;

  return selectedValue;
};

export default transform;
