export const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <picture className="card-img-container">
        <img className="card-img" src={url} alt={title} />
      </picture>
      <div className="card-info">
        <p className="card-title">{title}</p>
      </div>
    </div>
  );
};
