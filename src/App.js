import React, { lazy, Suspense } from "react";
import Header from "./Header";
import "./App.scss";
import Footer from "./Footer";
import useStore from "./hooks/useStore";
import { Routes, Route } from "react-router-dom";

const MainApp = lazy(() => import("MainApp/App"));
const AsideApp = lazy(() => import("AsideApp/App"));
const OnepackApp = lazy(() => import("OnepackApp/App"));

function App() {
  const { changePreview } = useStore();
  return (
    <div className="home">
      <Header withBtn onClick={() => changePreview("INPUT")} />
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <div className="contMain">
                <Suspense fallback={<div>Loading..</div>}>
                  <MainApp />
                </Suspense>
                <Suspense fallback={<div>Loading..</div>}>
                  <AsideApp />
                </Suspense>
              </div>
            }
          />
          <Route path="/onepack" element={<OnepackApp />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
