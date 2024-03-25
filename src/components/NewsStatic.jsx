/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem"
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import data  from "./jsonData.json"

const NewsStatic = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);


//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

  const updateNews = async () => {
    props.setProgress(10);
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;    setLoading(true);
    // let data = await fetch(url);
    props.setProgress(30);
    // let parsedData = await data.json();
    props.setProgress(70);
    setArticles(data.articles.slice((page - 1) * 9, page * 9)); // Fetch articles for the current page


    // const totalArticles = data.totalResults;  //33
    setTotalPages(Math.ceil(data.articles.length / props.pageSize));

    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [page]);
   console.log(articles);
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`mx-1 px-2 py-1 rounded-md ${
            page === i ? "bg-gray-300 font-bold" : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center relative mt-4 font-semibold shadow-sm shadow-gray-200 border border-red-100">
        {page > 1 && (
          <button
            className="px-2 py-1 rounded-md hover:bg-gray-100"
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </button>
        )}
        {pageNumbers}
        {page < totalPages && (
          <button
            className="px-2 py-1 rounded-md hover:bg-gray-100"
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        )}
        <span className="absolute bottom-0 right-3 bg-purple-100 text-white text-sm font-medium m-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
          <a href="/about">
            About
          </a>
          </span>
      </div>
    );
  };

  return (
    <>
      <h1
        className={`text-center sm:text-xl  md:text-2xl p-2 font-semibold border-1 `}
      >
        Newsomnia - Top Headlines
      </h1>

      {loading && <Spinner />}
      {articles && articles.length && (
        <>
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {totalPages >= 1 && renderPagination()}
        </>
      )}
    </>
  );
};

NewsStatic.defaultProps = {
  country: "in",
  pageSize: 9, // Set page size to 12 for 12 articles per page
  category: "general",
  };
  
  NewsStatic.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  };

export default NewsStatic;
