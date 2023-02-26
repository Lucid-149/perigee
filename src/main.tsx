import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppPageRouter,{AppRoutes} from "./app/routes/routes";

const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
    <App>
      <AppPageRouter />
      <AppRoutes />
    </App>
    </Suspense>
  </React.StrictMode>
);
