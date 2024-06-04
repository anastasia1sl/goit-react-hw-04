import css from "./ImageGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({ items, openModal }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {items.map((item) => (
          <li key={item.id}>
            <ImageCard item={item} openModal={openModal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
