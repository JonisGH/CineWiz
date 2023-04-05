import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "react-bootstrap";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider
    breakpoints={["xxl", "xl", "lg", "md", "sm"]}
    minBreakpoint="sm"
  >
    <App />
  </ThemeProvider>
);
