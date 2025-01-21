import { useState } from "react";
import CloseIcon from "../../assets/icons/close.svg";

import "./ModalAddCategory.css";
import { productService } from "../../services/product.service";
import { closeModal, showModal } from "../../utils/functions/modal";

const ModalAddCategory = ({ setMessage, types, categories, sizes, colors }) => {
  const [files, setFiles] = useState([]);
  const [fileContents, setFileContents] = useState([]);
  const [error, setError] = useState(null);

  // FormData
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");

  const [categoryProduct, setCategoryProduct] = useState("");

  const handleSubmitProduct = async (e) => {
    e.preventDefault();

    const productDetail = {
      nombre: nameProduct,
      precio: parseInt(priceProduct),
      categoria: parseInt(categoryProduct),
      imagenes: fileContents,
    };
    closeModal(".container-modal-add-category");
    showModal(".container-modal-confirm");
    setMessage({
      description: "Agregando producto...",
      status: 1000,
    });
    const response = await productService.addProduct(productDetail);
    setTimeout(async () => {
      if (response.status === 200) {
        clearInputs();
      }
      setMessage({
        description: response.message,
        status: response.status,
      });
    }, 2000);
  };

  const clearInputs = () => {
    setNameProduct("");
    setPriceProduct("");
    setCategoryProduct("");
    setFileContents([]);
  };

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;

    if (selectedFiles) {
      const fileArray = Array.from(selectedFiles);

      if (fileArray.length > 4) {
        setError("Solo puedes subir hasta 4 imágenes.");
        return;
      }

      setError(null);
      setFiles(fileArray);

      const fileReaders = [];
      const fileContentsArray = [];

      fileArray.forEach((file, index) => {
        const reader = new FileReader();
        fileReaders.push(reader);

        reader.onload = (e) => {
          if (e.target?.result) {
            fileContentsArray[index] = e.target.result;
            if (fileContentsArray.length === fileArray.length) {
              setFileContents(fileContentsArray);
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  return (
    <>
      {/* <ModalConfirm message={message} /> */}
      <div className="container-modal-add-category">
        <div className="modal-add-category">
          <div className="header-modal">
            <h3>Agregar Categoría</h3>
            <button onClick={() => closeModal(".container-modal-add-category")}>
              <img src={CloseIcon} alt="" />
            </button>
          </div>
          <form onSubmit={(e) => handleSubmitProduct(e)} className="body-modal">
            <div className="input">
              <label htmlFor="categoryProduct">Categoría</label>
              <input
                type="text"
                id="categoryProduct"
                className="categoryProduct"
                name="categoryProduct"
                required
              />
            </div>

            <button className="btn-add-product">AGREGAR CATEGORÍA</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalAddCategory;
