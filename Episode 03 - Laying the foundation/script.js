import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = <h1>Namaste React using JSX</h1>;

// React Component

const Title = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1>World</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
// root.render(jsxHeading);
