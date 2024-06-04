import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onLoadMore();
  };
  return (
    <div className={css.container}>
      <button onClick={handleClick} type="button" className={css.button}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
