import css from "./ImageCard.module.css";

const ImageCard = ({ item, openModal }) => {
  const hanldeClick = () => {
    openModal(item);
  };
  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={hanldeClick}
        className={css.img}
      />
    </div>
  );
};

export default ImageCard;
