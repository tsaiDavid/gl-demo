import GoldenLayout from "golden-layout";

export const config = {
  content: [
    {
      type: "row",
      content: [
        {
          type: "component",
          componentName: "widget",
          componentState: { label: "A" }
        },
        {
          type: "column",
          content: [
            {
              type: "component",
              componentName: "widget",
              componentState: { label: "B" }
            },
            {
              type: "component",
              componentName: "widget",
              componentState: { label: "C" }
            }
          ]
        }
      ]
    }
  ]
};

const myLayout = new GoldenLayout(config);

myLayout.registerComponent("widget", (container, componentState) => {
  container.getElement().html("<h2>" + componentState.label + "</h2>");
});

myLayout.init();
