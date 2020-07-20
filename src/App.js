import React, {useEffect,useState, useRef} from "react";
import { Resizable } from "re-resizable";
import logo from "./logo.svg";
import "./App.css";

import Content from "./Content";
import Header from "./Header";

function App() {
  return (
    <div className="wrapper-stack">
      <div className="top-section">
        <Header />
      </div>
      <div className="wrapper-cols">
        <Resizable
          className="left-column"
          defaultSize={{
            width: 320,
          }}
        >
          <Content n="left" />
        </Resizable>
        <div className="center-column">
          <Content n="center" />
        </div>
        <Resizable
          className="right-column"
          defaultSize={{
            width: 320,
          }}
        >
          <Content n="right" />
        </Resizable>
      </div>
    </div>
  );
}

export default React.memo(App, true);
