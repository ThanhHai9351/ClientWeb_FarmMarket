import React, { Fragment, Suspense } from "react";
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
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </Router>
    </Fragment>
  );
}

export default App;
