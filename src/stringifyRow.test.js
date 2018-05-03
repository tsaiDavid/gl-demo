import stringifyRow from "./stringifyRow";

test("works with a single row, one element", () => {
  expect(stringifyRow(["widget-a"])).toBe(`"widget-a"`);
});

test("works with a single row, two elements", () => {
  expect(stringifyRow(["widget-a", "widget-b"])).toBe(`"widget-a widget-b"`);
});
