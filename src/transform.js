// import lodash from "lodash";

/**
 * The goal is to take a `golden-layout` config object,
 * evaluating it for its rows (however nested), and preserve
 * its layout, mapping it to a layout (template string) that
 * can be used in a CSS grid (grid-template-area).
 *
 * We can use arrays to represent the row/matrix structure.
 */
const transform = config => {
  const rowNamesArray = [];

  // TODO: Refactor recursive function
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

  // NOTE: Can this be pulled into the recursive fn?
  config.content.forEach(el => {
    getComponentNames(el);
  });

  return `"${rowNamesArray.join(" ")}"`;
};

export default transform;
