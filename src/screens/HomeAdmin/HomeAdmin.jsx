import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import EditIcon from '../../assets/icons/edit.svg'
import DeleteIcon from '../../assets/icons/delete.svg'
import MenuIcon from '../../assets/icons/menu.svg'
import IndexPage from '../../components/IndexPage/IndexPage'
// import ModalClient from "../../../components/ModalClient/ModalClient";
import Sidebar from '../../components/Sidebar/Sidebar'
import { productService } from '../../services/product.service'

import './homeAdmin.css'
import '../../utils/animate.css'
import ModalImages from '../../components/ModalImages/ModalImages'
import ModalAddProduct from '../../components/ModalAddProduct/ModalAddProduct'
// import detailsService from "../../services/details.service";

// import ModalConfirm from "../../components/ModalConfirm/ModalConfirm";
// import Spinner from "../../components/Spinner/Spinner";
import ModalEditProduct from '../../components/ModalEditProduct/ModalEditProduct'
import { closeModal, showModal } from '../../utils/functions/modal'
import ModalDetails from '../../components/ModalDetails/ModalDetails'
const Products = () => {
  const [products, setProducts] = useState(undefined)
  const [cantPorPagina] = useState(10)
  const [pageActual, setPageActual] = useState(1)
  const [indexPages, setIndexPages] = useState([])
  const [cantPages, setCantPages] = useState(0)

  // Details
  const [categories, setCategories] = useState()

  const [productEdit, setProductEdit] = useState()
  const [idProduct, setIdProduct] = useState()
  const [message, setMessage] = useState(undefined)

  // Modal Content
  const [infoModalImages, setInfoModalImages] = useState()
  const [infoModalDetails, setInfoModalDetails] = useState()

  const getAllProducts = async () => {
    const response = await productService.getAllProducts(
      pageActual,
      cantPorPagina
    )
    if (response.status === 200) {
      setProducts(response.data.productos)
      setCategories(response.data.categorias)
      setCantPages(response.data.setCantPages)
      let indexCopy = []
      for (let i = 1; i <= response.data.cantPaginas; i++) {
        indexCopy.push(i)
      }

      setIndexPages(indexCopy)
    }
  }

  const showSidebar = () => {
    document.querySelector('.container-sidebar')?.classList.add('show-sidebar')
  }

  const showModalImages = product => {
    setInfoModalImages({
      nameProduct: product.nombre,
      image: product.imagen
    })

    showModal('.container-modal-images')
  }

  const showModalDetails = product => {
    setInfoModalDetails({
      product: product
    })
    showModal('.container-modal-details')
  }

  const showModalEditProduct = product => {
    setProductEdit(product)
    showModal('.container-modal-edit-product')
  }

  const showModalDelete = id => {
    showModal('.container-modal-confirm')

    setIdProduct(id)
    setMessage({
      description: '¿Estás seguro de eliminar este producto?',
      status: 300,
      action: deleteProduct
    })
  }

  const deleteProduct = async idProduct => {
    setMessage({
      description: 'Eliminando producto...',
      status: 1000
    })
    const response = await productService.deleteProduct(idProduct)
    setTimeout(() => {
      setMessage({
        description: response.message,
        status: response.status
      })
      const productUpdate = products?.filter(
        product => parseInt(product.id) !== idProduct
      )
      setProducts(productUpdate)
      setTimeout(() => {
        closeModal('.container-modal-confirm')
      }, 2500)
    }, 2500)
  }

  useEffect(() => {
    getAllProducts(pageActual)
  }, [pageActual])
  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <>
      {/* <ModalConfirm
        message={message}
        actionConfirm={message?.action}
        idSale={idProduct}
      /> */}

      <ModalEditProduct
        setMessage={setMessage}
        categories={categories}
        product={productEdit}
      />
      <ModalAddProduct setMessage={setMessage} categories={categories} />
      <ModalImages
        product={infoModalImages}
        setInfoModalImages={setInfoModalImages}
      />
      <ModalDetails
        infoModalDetails={infoModalDetails}
        setInfoModalDetails={setInfoModalDetails}
      />
      <div className='container-products-admin'>
        <Sidebar />
        <div className='products-admin'>
          <div className='head-admin'>
            <button className='btn-menu' onClick={() => showSidebar()}>
              <img src={MenuIcon} alt='' />
            </button>
            <h1 className='animate fadeIn'>PRODUCTOS</h1>
            <button
              onClick={() => showModal('.container-modal-add-product')}
              className='btn-add-product animate fadeIn'
            >
              AGREGAR
            </button>
          </div>

          <div className='table-products'>
            {products && products?.length > 0 && (
              <>
                <table cellSpacing='0'>
                  <thead className='head-table animate fadeIn'>
                    <tr>
                      <th>N°</th>
                      <th>Nombre</th>
                      <th>Imágenes</th>
                      <th>Detalles</th>
                      <th>Stock</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map((product, key) => (
                      <tr
                        key={key}
                        className={`animate fadeIn delay-${key + 1}s`}
                      >
                        <td>{product.id}</td>
                        <td>{product.nombre}</td>
                        <td>
                          <button onClick={() => showModalImages(product)}>
                            VER IMÁGENES
                          </button>
                        </td>

                        <td>
                          <button onClick={() => showModalDetails(product)}>
                            VER DETALLES
                          </button>
                        </td>
                        <td>{product.stock ? 'Si' : 'No'}</td>
                        <td>
                          <button
                            className='action'
                            onClick={() => showModalEditProduct(product)}
                          >
                            <img src={EditIcon} alt='' />
                          </button>
                          <button
                            className='action'
                            onClick={() =>
                              showModalDelete(parseInt(product.id))
                            }
                          >
                            <img src={DeleteIcon} alt='' />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <IndexPage
                  pageActual={pageActual}
                  setPageActual={setPageActual}
                  indexPages={indexPages}
                  cantPages={cantPages}
                />
              </>
            )}
            {products && products.length === 0 && (
              <div className='empty-products'>
                <p>No hay productos en la página</p>
              </div>
            )}
            {products === undefined && <div className='empty-products'></div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
