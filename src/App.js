import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import {
  DefaultComponent,
  DefaultComponentNotFound,
} from "./components/layout/DefaultComponent/DefaultComponent";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={
                route.isShowHeader === true ? (
                  <DefaultComponent children={route.page} />
                ) : (
                  <DefaultComponentNotFound children={route.page} />
                )
              }
            />
          ))}
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
