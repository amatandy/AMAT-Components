import React from "react";
import ReactDOMClient from "react-dom/client";
import { Buttons } from "./screens/Buttons";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Buttons />);
