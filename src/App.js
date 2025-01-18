import React, { lazy, Suspense } from "react";
import Header from "./Header";
import "./App.scss";
import Footer from "./Footer";

const MainApp = lazy(() => import("MainApp/App"));
const AsideApp = lazy(() => import("AsideApp/App"));

function App() {
  return (
    <div className="home">
      <Header />
      <div className="contMain">
        <Suspense fallback={<div>Loading..</div>}>
          <MainApp />
        </Suspense>
        <Suspense fallback={<div>Loading..</div>}>
          <AsideApp />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
