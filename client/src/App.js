import React, { Fragment } from "react";
import "./App.css";

import InputArticle from "./components/InputArticle";
import ListArticles from "./components/ListArticle";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputArticle />
        <ListArticles />
      </div>
    </Fragment>
  );
}

export default App;
