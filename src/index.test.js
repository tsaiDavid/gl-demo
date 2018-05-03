import transform, { getNamesFromRow } from "./transform";

const configOne = {
  content: [
    {
      type: "row",
      content: [
        {
          type: "component",
          componentName: "widget-a"
        }
      ]
    }
  ]
};

const configTwo = {
  content: [
    {
      type: "row",
      content: [
        {
          type: "component",
          componentName: "widget-a"
        },
        {
          type: "component",
          componentName: "widget-b"
        }
      ]
    }
  ]
};

export const configThree = {
  content: [
    {
      type: "row",
      content: [
        {
          type: "component",
          componentName: "widget-a"
        },
        {
          type: "column",
          content: [
            {
              type: "component",
              componentName: "widget-b"
            },
            {
              type: "component",
              componentName: "widget-c"
            }
          ]
        }
      ]
    }
  ]
};

test("Builds string from a content array, for single component", () => {
  // We are passing in only the content array
  expect(getNamesFromRow(configOne.content)).toBe('"widget-a"');
});

// +-----------------------+
// |                       |
// |                       |
// |                       |
// |         A             |
// |                       |
// |                       |
// |                       |
// |                       |
// |                       |
// +-----------------------+

test("Converts a row with a single component", () => {
  expect(transform(configOne)).toBe(`"widget-a"`);
});

test("Converts a row with two components", () => {
  expect(transform(configTwo)).toBe(`"widget-a widget-b"`);
});

// +------------------------+
// |           +------------|
// |           |           ||
// |           |     B     ||
// |   A       |           ||
// |           |           ||
// |           +------------|
// |           |           ||
// |           |     C     ||
// |           |           ||
// |           +------------|
// +------------------------+

test("Converts a row with a column w/ children", () => {
  expect(transform(configThree)).toBe(
    `"widget-a widget-b" "widget-a widget-c"`
  );
});
