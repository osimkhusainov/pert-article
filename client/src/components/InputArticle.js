import React, { Fragment, useState } from "react";
import { axiosInstance } from "../config";
import axios from "axios";

const InputArticle = () => {
  const [content, setContent] = useState("");
  const [heading, setHeading] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { content, heading };
      await axios.post("/articles", body);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">
        Articles app with Postgres, Express, React, Node.js
      </h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <div className="row mt-2">
          <div className="articles">
            <input
              type="text"
              placeholder="Heading"
              className="form-control mb-4"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
            <textarea
              type="text"
              className="form-control mb-4"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="button-add">
              <button className="btn btn-success">Add</button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default InputArticle;
