import { useEffect, useState } from 'react'
import CloseIcon from '../../assets/icons/close.svg'

import './ModalAddProduct.css'
import { productService } from '../../services/product.service'
import { closeModal, showModal } from '../../utils/functions/modal'

const ModalAddProduct = ({ setMessage, categories }) => {
  const [files, setFiles] = useState([])
  const [fileContents, setFileContents] = useState([])
  const [error, setError] = useState(null)

  // FormData
  const [nameProduct, setNameProduct] = useState('')
  const [priceProduct, setPriceProduct] = useState('')

  const [categoryProduct, setCategoryProduct] = useState('')
  const [descriptionProduct, setDescriptionProduct] = useState('')

  const handleSubmitProduct = async e => {
    e.preventDefault()

    const productDetail = {
      nombre: nameProduct,
      precio: parseInt(priceProduct),
      categoria: parseInt(categoryProduct),
      imagenes: fileContents,
      descripcion: descriptionProduct
    }

    console.log(productDetail)

    closeModal('.container-modal-add-product')
    showModal('.container-modal-confirm')
    setMessage({
      description: 'Agregando producto...',
      status: 1000
    })
    const response = await productService.addProduct(productDetail)
    setTimeout(async () => {
      if (response.status === 200) {
        clearInputs()
      }
      setMessage({
        description: response.message,
        status: response.status
      })
    }, 2000)
  }

  const clearInputs = () => {
    setNameProduct('')
    setPriceProduct('')
    setCategoryProduct('')
    setFileContents([])
  }

  const handleFileChange = event => {
    const selectedFiles = event.target.files

    if (selectedFiles) {
      const fileArray = Array.from(selectedFiles)

      if (fileArray.length > 4) {
        setError('Solo puedes subir hasta 4 imágenes.')
        return
      }

      setError(null)
      setFiles(fileArray)

      const fileReaders = []
      const fileContentsArray = []

      fileArray.forEach((file, index) => {
        const reader = new FileReader()
        fileReaders.push(reader)

        reader.onload = e => {
          if (e.target?.result) {
            fileContentsArray[index] = e.target.result
            if (fileContentsArray.length === fileArray.length) {
              setFileContents(fileContentsArray)
            }
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  return (
    <>
      {/* <ModalConfirm message={message} /> */}
      <div className='container-modal-add-product'>
        <div className='modal-add-product'>
          <div className='header-modal'>
            <h3>Agregar Producto</h3>
            <button onClick={() => closeModal('.container-modal-add-product')}>
              <img src={CloseIcon} alt='' />
            </button>
          </div>
          <form onSubmit={e => handleSubmitProduct(e)} className='body-modal'>
            <div className='inputs-group'>
              <div className='input'>
                <label htmlFor='nameProduct'>Nombre</label>
                <input
                  type='text'
                  id='nameProduct'
                  className='nameProduct'
                  name='nameProduct'
                  required
                  onChange={e => setNameProduct(e.target.value)}
                  value={nameProduct}
                  placeholder='Vestido Floreado'
                />
              </div>
              <div className='input'>
                <label htmlFor='priceProduct'>Precio</label>
                <input
                  type='number'
                  id='priceProduct'
                  className='priceProduct'
                  name='priceProduct'
                  required
                  onChange={e => setPriceProduct(e.target.value)}
                  value={priceProduct}
                  placeholder='15.999'
                />
              </div>
            </div>

            <div className='input'>
              <label htmlFor='categoryProduct'>Categoría</label>
              <select
                id='categoryProduct'
                className='categoryProduct'
                name='categoryProduct'
                required
                onChange={e => setCategoryProduct(e.target.value)}
                value={categoryProduct}
              >
                {categories?.map((category, key) => (
                  <option key={key} value={category.id}>
                    {category.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div className='input-image'>
              <div className='head-input-image'>
                <label htmlFor='imagesProduct'>Imágenes</label>

                <input
                  type='file'
                  name='file-1'
                  id='file-1'
                  className='inputfile inputfile-1'
                  data-multiple-caption='{count} archivos seleccionados'
                  onChange={handleFileChange}
                  multiple
                />
                <label htmlFor='file-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='iborrainputfile'
                    width='20'
                    height='17'
                    viewBox='0 0 20 17'
                  >
                    <path d='M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z'></path>
                  </svg>
                  <span className='iborrainputfile'>AGREGAR</span>
                </label>
              </div>

              <div className='images-to-charge'>
                {fileContents.length === 0 && <p>No agregaste imágenes</p>}
                {fileContents.length > 0 &&
                  fileContents.map((content, index) => (
                    <div key={index} className='image-preview'>
                      <div className='image-shadow'>
                        <button
                          onClick={() =>
                            setFileContents(
                              fileContents.filter(
                                fileContent => fileContent !== content
                              )
                            )
                          }
                          type='button'
                          className='delete-image'
                        >
                          <img src={CloseIcon} alt='' />
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
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>

            <textarea
              onChange={e => setDescriptionProduct(e.target.value)}
              name='description'
              id='description'
            ></textarea>

            <button className='btn-add-product'>AGREGAR PRODUCTO</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ModalAddProduct
