import lodash from "lodash";
// Do all your transformation work here

const wrapQuotes = str => {
  return `"${str}"`;
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
