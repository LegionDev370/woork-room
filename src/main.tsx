import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import Providers from "./providers/provider";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <RouterProvider router={routes} />
  </Providers>
);
