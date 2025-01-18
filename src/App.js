import React, {lazy, Suspense} from 'react';
import Header from "./Header";
import './App.css';
import Footer from "./Footer";

const MainApp = lazy(() => import("MainApp/App"))

function App() {
  return (
    <div className="app">
      <Header />
      <div className="contMain">
        <MainApp />
        <div className='aside'>
          aside
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
