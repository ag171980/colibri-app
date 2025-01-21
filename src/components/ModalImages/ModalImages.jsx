import CloseIcon from "../../assets/icons/close.svg";
import "./ModalImages.css";
import { closeModal } from "../../utils/functions/modal";
const baseUrl = process.env.REACT_APP_BASE_URL;
const ModalImages = ({ product, setInfoModalImages }) => {
  const closeModalImages = () => {
    setInfoModalImages(undefined);

    closeModal(".container-modal-images");
  };
  return (
    <div className="container-modal-images">
      <div className="modal-images">
        <div className="header-modal">
          <h3>{product?.nameProduct}</h3>
          <button onClick={() => closeModalImages()}>
            <img src={CloseIcon} alt="" />
          </button>
        </div>
        <div className="body-modal">
          <h4>Imágenes</h4>
          <div className="images">
            {product?.image?.map((image) => (
              <img src={baseUrl ? baseUrl + image : ""} alt="" />
            ))}
          </div>
          <span>*Solo se mostrarán 4 en la página</span>
        </div>
      </div>
    </div>
  );
};

export default ModalImages;
