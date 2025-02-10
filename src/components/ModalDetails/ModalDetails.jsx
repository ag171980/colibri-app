import CloseIcon from '../../assets/icons/close.svg'
import './ModalDetails.css'
import { closeModal } from '../../utils/functions/modal'
import NumberFormat from 'react-number-format'

const ModalDetails = ({ infoModalDetails, setInfoModalDetails }) => {
  const closeModalDetails = () => {
    setInfoModalDetails(undefined)

    closeModal('.container-modal-details')
  }
  return (
    <div className='container-modal-details'>
      <div className='modal-details'>
        <div className='header-modal'>
          <h3>
            Detalles de <b>{infoModalDetails?.product?.nombre}</b>
          </h3>
          <button onClick={() => closeModalDetails()}>
            <img src={CloseIcon} alt='' />
          </button>
        </div>
        <div className='body-modal'>
          <div className='container-details'>
            <div className='detail'>
              <h4>Precio</h4>
              <NumberFormat
                value={infoModalDetails?.product?.precio}
                prefix='$'
                allowLeadingZeros
                thousandSeparator='.'
                decimalSeparator=','
                readOnly
              />
            </div>
            <div className='detail'>
              <h4>Categoría</h4>
              <p>{infoModalDetails?.product?.categoria}</p>
            </div>
            <div className='detail'>
              <h4>Descripción</h4>
              <p>{infoModalDetails?.product?.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDetails
