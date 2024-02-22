import React from "react";
import ReactDOM from "react-dom/client";

let root = ReactDOM.createRoot(document.getElementById("root"));
let parent = React.createElement("h1", {}, "Hello World");

root.render(parent);
