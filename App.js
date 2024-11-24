const heading = React.createElement(
  "div",
  { id: "parent", cyz: "checkbox" },
  React.createElement(
    "div",
    { id: "child", cyz: "checkbox" },
    [React.createElement(
        "h1",
        { id: "child2", cyz: "checkbox" },
        "hello react buddy"
      ),React.createElement(
        "h2",
        { id: "child2 sibling", cyz: "checkbox" },
        "hello react buddy h2"
      ),]
  ),
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

