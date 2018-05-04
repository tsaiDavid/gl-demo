import { stringifyNamesArray, stringifyMultiRows } from "./stringifyRow";

test("works with a single row, one element", () => {
  expect(stringifyNamesArray(["widget-a"])).toBe("widget-a");
});

test("works with a single row, two elements", () => {
  expect(stringifyNamesArray(["widget-a", "widget-b"])).toBe(
    "widget-a widget-b"
  );
});

test("simple 2x2 string matrix to string template", () => {
  expect(stringifyMultiRows([["a", "b"], ["a", "b"]])).toBe('"a b" "a b"');
});

test("simple 3x3 string matrix to string template", () => {
  // NOTE: third element intentionally has a different char
  expect(
    stringifyMultiRows([["a", "a", "a"], ["b", "b", "b"], ["b", "c", "c"]])
  ).toBe('"a a a" "b b b" "b c c"');
});
