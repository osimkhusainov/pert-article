import React, { Fragment, useEffect, useState } from "react";
import EditArticle from "./EditArticle";

const ListArticles = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const response = await fetch("/articles");
      const data = await response.json();
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
      await fetch(`/articles/${id}`, { method: "DELETE" });
      setArticles(articles.filter((article) => article.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <table className="table table-bordered mt-5 text-center">
        <thead>
          <tr>
            <th>Article</th>
            <th>Content</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
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
                <tr key={article.id}>
                  <td>{article.heading}</td>
                  <td>{article.content}</td>
                  <td>{createdDate}</td>
                  <td>{updatedDate}</td>
                  <td>
                    <EditArticle article={article} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteArticle(article.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListArticles;
