import React, { Fragment, useState } from "react";
import { axiosInstance } from "../config";

const EditArticle = ({ article }) => {
  const [content, setContent] = useState(article.content);
  const [heading, setHeading] = useState(article.heading);

  const updateArticle = async (e) => {
    try {
      e.preventDefault();
      const body = { content, heading };
      await axiosInstance.put(`/articles/${article.id}`, body);
      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-primary btn-edit"
        data-bs-toggle="modal"
        data-bs-target={`#id${article.id}`}
      >
        Edit
      </button>

      <div
        class="modal fade"
        id={`id${article.id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit article
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setHeading(article.heading);
                  setContent(article.content);
                }}
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
              />
              <textarea
                type="text"
                className="form-control mt-2 text-block"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  setHeading(article.heading);
                  setContent(article.content);
                }}
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={(e) => updateArticle(e)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default EditArticle;
