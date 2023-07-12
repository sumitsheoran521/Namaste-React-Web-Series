/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I'm h1 tag</h1>
 *          <h1>I'm h1 tag</h1>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h1>I'm h1 tag</h1>
 *      </div>
 * </div>
 */

const root = document.getElementById("root");
const parent = React.createElement("div", { id: "parent", key: 1 }, [
  React.createElement("div", { id: "child1", key: 2 }, [
    React.createElement("h1", { key: 3 }, "I'm an h1 tag"),
    React.createElement("h1", { key: 4 }, "I'm an h1 tag"),
  ]),
  React.createElement("div", { id: "child1", key: 5 }, [
    React.createElement("h1", { key: 6 }, "I'm an h1 tag"),
    React.createElement("h1", { key: 7 }, "I'm an h1 tag"),
  ]),
]);

console.log(parent);

const renderRoot = ReactDOM.createRoot(root);
renderRoot.render(parent);
