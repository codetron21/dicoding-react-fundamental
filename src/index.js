import React from "react";
import { createRoot } from "react-dom/client";

import NotesScreen from "./pages/NotesScreen";

// import style
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<NotesScreen />);
