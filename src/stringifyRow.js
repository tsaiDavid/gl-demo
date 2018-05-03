/**
 * rowArray: []string
 * returns space-delimited string template of names
 *
 * example: ["a", "b", "c"]
 * output: '"a b c"'
 */
const stringifyRow = rowArray => {
  return `"${rowArray
    .join(" ")
    .split(",")
    .join(" ")}"`;
};

export default stringifyRow;
