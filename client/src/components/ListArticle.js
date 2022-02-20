import React, { Fragment, useEffect, useState } from "react";
import EditArticle from "./EditArticle";
import axios from "axios";

const ListArticles = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const response = await axios.get("/articles");
      const data = await response.data;
      setArticles(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getArticles();
  }, []);
  const deleteArticle = async (id) => {
    try {
      await axios.delete(`/articles/${id}`, { method: "DELETE" });
      setArticles(articles.filter((article) => article.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      {articles
        .sort((a, b) => b.id - a.id)
        .map((article) => {
          const normalDate = (timestamp) =>
            new Date(timestamp).toLocaleDateString("ru-RU", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            });
          const createdDate = normalDate(article.created_at);
          const updatedDate =
            article.updated_at === null
              ? "No updates yet"
              : normalDate(article.updated_at);
          return (
            <div class="card mb-3" key={article.id}>
              <div class="card-body">
                <h5 class="card-title">{article.heading}</h5>
                <h7 className="dates">
                  <span className="created">Created</span> - {createdDate} /{" "}
                  <span className="updated">Updated</span>- {updatedDate}
                </h7>
                <p class="card-text mt-4">{article.content}</p>
                <div className="buttons">
                  <EditArticle article={article} />
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteArticle(article.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </Fragment>
  );
};

export default ListArticles;
