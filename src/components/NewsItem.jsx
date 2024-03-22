/* eslint-disable react/prop-types */
import "./NewsItem.css";
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  

  const backupCardImage =
    "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg";

  return (
    <div className="my-3 container">
      <div className="row">
        <div className="col-lg-12  mb-3 d-flex align-items-stretch">
          <div className="card  text-bg-dark rounded-lg shadow border border-gray-200">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              <span className="badge rounded-pill bg-danger"> {source} </span>
            </div>
            <img
              style={{ height: "200px", width: "auto" }}
              src={imageUrl ?? backupCardImage}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title font-semibold line-clamp-3">{title}</h5>
              <p
                className="card-text  text-ellipsis text-green-300"
                style={{ whiteSpace: "nowrap", overflow: "hidden" }}
              >
                {description}
              </p>
              <p className="card-text">
                <small className="text-white">
                  By {!author ? "Unknown" : author} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
              <a
                rel="noreferrer"
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-primary
                mt-2"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
