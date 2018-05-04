import lodash from "lodash";
/**
 * rowArray: []string
 * returns a JS string, space delimited (not string template)
 *
 * example: ["a", "b", "c"]
 * output: "a b c"
 */
export const stringifyNamesArray = namesArray => {
  return namesArray.join(" ");
  // return `"${rowArray
  //   .join(" ")
  //   .split(",")
  //   .join(" ")}"`;
};

// Expected value to be (using ===):
// "\"a a a\" \"b b b\" \"b c c\""
// Received:
// ["a a a", "b b b", "b c c"]

/**
 * rowArray: []string | []Array<string>
 * returns space-delimited string template of names
 *
 * example: [["a", "b"], ["a", "b"]]
 * output: '"a b" "a b"'
 */
export const stringifyMultiRows = rowArray => {
  const preparedArray = rowArray.map(row => stringifyNamesArray(row));

  return lodash.trim(
    preparedArray.reduce((str, el, idx) => {
      return `${str} "${el}"`;
    }, "")
  );
};
