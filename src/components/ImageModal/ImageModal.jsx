import ReactModal from "react-modal";

const ImageModal = ({ image, isOpen, closeModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnEsc={true}
        style={customStyles}
      >
        <div>{image && <img src={image.urls.regular} alt="Selected" />}</div>
      </ReactModal>
    </div>
  );
};

export default ImageModal;
