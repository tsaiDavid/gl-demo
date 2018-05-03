var config = {
  content: [
    {
      type: "row",
      content: [
        {
          type: "component",
          componentName: "testComponent",
          componentState: { label: "A" }
        },
        {
          type: "column",
          content: [
            {
              type: "component",
              componentName: "testComponent",
              componentState: { label: "B" }
            },
            {
              type: "component",
              componentName: "testComponent",
              componentState: { label: "C" }
            }
          ]
        }
      ]
    }
  ]
};
