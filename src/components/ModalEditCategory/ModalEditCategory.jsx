import { useEffect, useRef, useState } from "react";

import CloseIcon from "../../assets/icons/close.svg";

import "../../utils/styles/modal.css";
import "./ModalEditCategory.css";

import axios from "axios";
import { productService } from "../../services/product.service";
import { closeModal, showModal } from "../../utils/functions/modal";

const baseUrl = process.env.REACT_APP_URL_BACKEND_BASE;
const ModalEditCategory = ({
  setMessage,
  types,
  categories,
  sizes,
  colors,
  product,
}) => {
  const scrollableRef = useRef(null);
  const [load, setLoad] = useState(false);
  const [filesEdit, setFilesEdit] = useState([]);
  const [fileContentsEdit, setFileContentsEdit] = useState([]);
  const [error, setError] = useState(null);

  // FormData
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState(0);
  const [typeProduct, setTypeProduct] = useState(1);
  const [categoryProduct, setCategoryProduct] = useState(1);

  const [sizeProduct, setSizeProduct] = useState();
  const [colorProduct, setColorProduct] = useState();
  const [cantProduct, setCantProduct] = useState();

  const [combos, setCombos] = useState([]);

  if (!load && product) {
    setLoad(true);
    setNameProduct(product?.nombre);
    setPriceProduct(product?.precio);
    setTypeProduct(
      types?.filter((type) => type.nombre === product?.tipo)[0]?.id
    );
    setCategoryProduct(
      categories?.filter(
        (category) => category.nombre === product?.categoria
      )[0]?.id
    );
    const fileContentsCopy = [...fileContentsEdit];
    console.log(fileContentsCopy);

    product.imagen.map(async (img) => {
      const response = await axios.get(`${baseUrl}${img}`, {
        responseType: "blob",
      });
      const reader = new FileReader();
      reader.readAsDataURL(response.data);
      reader.onloadend = () => {
        const base64data = reader.result;

        fileContentsCopy.push(base64data);

        setFileContentsEdit(fileContentsCopy);
      };
    });

    product?.detalles.map((detail) => {
      if (sizes && colors) {
        detail.colores.map((color) => {
          let comboItem = {
            idTalle: sizes?.filter((size) => size.nombre === detail.talle)[0]
              .id,
            idColor: color.id,
            cantidad: parseInt(color.cantidad),
          };

          let comboCopy = combos;
          comboCopy?.push(comboItem);

          setCombos(comboCopy);
          setSizeProduct(sizes[0].id);
          setColorProduct(colors[0].id);
          setCantProduct(0);
        });
      }
    });
  }

  const handleEditFileChange = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const fileArray = Array.from(selectedFiles);

      if (fileArray.length > 4) {
        setError("Solo puedes subir hasta 4 imágenes.");
        return;
      }

      setError(null);
      setFilesEdit(fileArray);

      const fileReaders = [];
      const fileContentsArray = [];

      fileArray.forEach((file, index) => {
        const reader = new FileReader();
        fileReaders.push(reader);

        reader.onload = (e) => {
          if (e.target?.result) {
            fileContentsArray[index] = e.target.result;
            if (fileContentsArray.length === fileArray.length) {
              setFileContentsEdit(fileContentsArray);
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const createCombo = () => {
    let comboCopy = combos;

    if (sizeProduct && colorProduct && cantProduct) {
      let comboItem = {
        idTalle: sizeProduct,
        idColor: colorProduct,
        cantidad: cantProduct,
      };

      comboCopy?.push(comboItem);

      setCombos(comboCopy);
      if (sizes && colors) {
        setSizeProduct(sizes[0].id);
        setColorProduct(colors[0].id);
        setCantProduct(0);
      }
    }
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    if (
      product?.id &&
      combos &&
      nameProduct &&
      priceProduct &&
      typeProduct &&
      categoryProduct
    ) {
      const productDetail = {
        id: parseInt(product?.id),
        nombre: nameProduct,
        precio: priceProduct,
        tipo: typeProduct,
        categoria: categoryProduct,
        imagenes: fileContentsEdit,
        sets: combos,
      };
      closeModal(".container-modal-edit-product");
      showModal(".container-modal-confirm");

      setMessage({
        description: "Editando producto...",
        status: 1000,
      });
      const response = await productService.editProduct(productDetail);
      setTimeout(async () => {
        setMessage({
          description: response.message,
          status: response.status,
        });
      }, 2000);
    }
  };

  useEffect(() => {
    const scrollableDiv = scrollableRef.current;

    const handleWheel = (event) => {
      if (scrollableDiv) {
        event.preventDefault();
        scrollableDiv.scrollLeft += event.deltaY;
      }
    };

    if (scrollableDiv) {
      scrollableDiv.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  useEffect(() => {
    setLoad(false);
    setCombos([]);
    setFileContentsEdit([]);
  }, [product]);

  useEffect(() => {
    console.log(fileContentsEdit);
  }, [fileContentsEdit]);

  return (
    <>
      {/* <ModalConfirm message={message} /> */}
      <div className="container-modal container-modal-edit-product">
        <div className="modal modal-edit-product">
          <div className="header-modal">
            <h3>Editar Producto</h3>
            <button onClick={() => closeModal(".container-modal-edit-product")}>
              <img src={CloseIcon} alt="" />
            </button>
          </div>
          <form onSubmit={(e) => handleSubmitProduct(e)} className="body-modal">
            <div className="inputs-group">
              <div className="input">
                <label htmlFor="nameProduct">Nombre</label>
                <input
                  type="text"
                  id="nameProduct"
                  className="nameProduct"
                  name="nameProduct"
                  required
                  onChange={(e) => setNameProduct(e.target.value)}
                  value={nameProduct}
                  placeholder="Vestido Floreado"
                />
              </div>
              <div className="input">
                <label htmlFor="priceProduct">Precio</label>
                <input
                  type="number"
                  id="priceProduct"
                  className="priceProduct"
                  name="priceProduct"
                  required
                  onChange={(e) => setPriceProduct(parseInt(e.target.value))}
                  value={priceProduct}
                  placeholder="15.999"
                />
              </div>
            </div>

            <div className="inputs-group">
              <div className="input">
                <label htmlFor="typeProduct">Tipo</label>
                <select
                  id="typeProduct"
                  className="typeProduct"
                  name="typeProduct"
                  required
                  onChange={(e) => setTypeProduct(parseInt(e.target.value))}
                  value={typeProduct}
                >
                  {types?.map((type, key) => (
                    <option key={key} value={type.id}>
                      {type.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input">
                <label htmlFor="categoryProduct">Categoría</label>
                <select
                  id="categoryProduct"
                  className="categoryProduct"
                  name="categoryProduct"
                  required
                  onChange={(e) => setCategoryProduct(parseInt(e.target.value))}
                  value={categoryProduct}
                >
                  {categories?.map((category, key) => (
                    <option key={key} value={category.id}>
                      {category.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="input-edit-image">
              <div className="head-input-edit-image">
                <label htmlFor="imagesEditProduct">Imágenes</label>

                <input
                  type="file"
                  name="file-edit-1"
                  id="file-edit-1"
                  className="inputfileedit inputfileedit-1"
                  data-multiple-caption="{count} archivos seleccionados"
                  onChange={handleEditFileChange}
                  multiple
                />
                <label htmlFor="file-edit-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="iborrainputfile"
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                  >
                    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                  </svg>
                  <span className="iborrainputfile">AGREGAR </span>
                </label>
              </div>

              <div className="images-to-charge">
                {fileContentsEdit.length === 0 && <p>No agregaste imágenes</p>}
                {fileContentsEdit.length !== 0 &&
                  fileContentsEdit.map((content, index) => (
                    <div key={index} className="image-preview">
                      <div className="image-shadow">
                        <button
                          onClick={() =>
                            setFileContentsEdit(
                              fileContentsEdit.filter(
                                (fileContent) => fileContent !== content
                              )
                            )
                          }
                          type="button"
                          className="delete-image"
                        >
                          <img src={CloseIcon} alt="" />
                        </button>
                      </div>
                      <img
                        key={index}
                        src={content}
                        alt={`Vista previa ${index}`}
                      />
                    </div>
                  ))}
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>

            <div className="combo">
              <div className="inputs-group">
                <div className="input">
                  <label htmlFor="sizeProduct">Talles</label>
                  <select
                    id="sizeProduct"
                    className="sizeProduct"
                    name="sizeProduct"
                    required
                    onChange={(e) => setSizeProduct(parseInt(e.target.value))}
                    value={sizeProduct}
                  >
                    {sizes?.map((size, key) => (
                      <option key={key} value={size.id}>
                        {size.nombre}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input">
                  <label htmlFor="colorProduct">Colores</label>
                  <select
                    id="colorProduct"
                    className="colorProduct"
                    name="colorProduct"
                    required
                    onChange={(e) => setColorProduct(parseInt(e.target.value))}
                    value={colorProduct}
                  >
                    {colors?.map((color, key) => (
                      <option key={key} value={color.id}>
                        {color.nombre}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input">
                  <label htmlFor="cantProduct">Cantidad</label>
                  <input
                    type="number"
                    id="cantProduct"
                    className="cantProduct"
                    name="cantProduct"
                    required
                    onChange={(e) => setCantProduct(parseInt(e.target.value))}
                    value={cantProduct}
                    placeholder="1"
                  />
                </div>
              </div>

              <button
                className="create-set"
                onClick={() => createCombo()}
                type="button"
              >
                CREAR SET
              </button>
            </div>
            <div className="created-combos">
              <label htmlFor="">Detalles</label>
              <div className="combos" ref={scrollableRef}>
                {combos?.length === 0 && (
                  <p>No agregaste detalles del producto</p>
                )}
                {combos &&
                  combos?.length > 0 &&
                  combos?.map((combo, key) => (
                    <div key={key} className="combo">
                      <button
                        type="button"
                        onClick={() =>
                          setCombos(
                            combos.filter(
                              (comboSelected) => comboSelected !== combo
                            )
                          )
                        }
                        className="delete-combo"
                      >
                        <img src={CloseIcon} alt="" />
                      </button>
                      <span className="size-selected">
                        <b>
                          {
                            sizes?.filter(
                              (size) => size.id === combo.idTalle
                            )[0].nombre
                          }
                        </b>
                      </span>
                      <br />
                      <span className="color-selected">
                        <b>
                          {
                            colors?.filter(
                              (color) => color.id === combo.idColor
                            )[0].nombre
                          }
                        </b>
                        <div
                          style={{
                            height: "15px",
                            width: "15px",
                            background: `${
                              colors?.filter(
                                (color) => color.id === combo.idColor
                              )[0].hexadecimal
                            }`,
                          }}
                        ></div>
                      </span>
                      <span className="cant-selected">
                        {combo.cantidad} uni.
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            <button className="btn-add-product">EDITAR PRODUCTO</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalEditCategory;
