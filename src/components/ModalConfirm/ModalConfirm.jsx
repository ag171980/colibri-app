import React, { useContext } from 'react'
import ConfirmIcon from '../../assets/icons/confirm.png'
import ErrorIcon from '../../assets/icons/error.png'
import CheckGreenIcon from '../../assets/icons/checkgreen.png'
import './ModalConfirm.css'
import { useSelector } from 'react-redux'
import Spinner from "../Spinner/Spinner";

const ModalConfirm = ({ message, actionConfirm, idSale }) => {
  const carritoData = useSelector(state => state.cart)
  const paymentData = useSelector(state => state.buyer)

  const statusIcons = {
    400: {
      icon: ErrorIcon,
      class: 'error-response'
    },
    300: {
      icon: ConfirmIcon,
      class: 'confirm-response'
    },
    200: {
      icon: CheckGreenIcon,
      class: 'ok-response'
    }
  }

  const closeModalConfirm = () => {
    document
      .querySelector('.container-modal-confirm')
      ?.classList.remove('show-modal')
  }
  return (
    <div className='container-modal-confirm'>
      {message?.status === 1000 && (
        <div className='modal-loading'>
          <Spinner />
          <p>{message?.description}</p>
        </div>
      )}
      {message && message?.status !== 1000 && (
        <div className='modal-confirm'>
          <img src={statusIcons[message?.status].icon} alt='' />
          <h3 className={`${statusIcons[message?.status].class}`}>
            {message?.description}
          </h3>
          <div className='buttons-confirm'>
            {message?.status === 300 &&
              actionConfirm !== undefined &&
              idSale !== undefined && (
                <>
                  <button
                    className='cancel'
                    onClick={() => closeModalConfirm()}
                  >
                    CANCELAR
                  </button>
                  <button
                    className='confirm'
                    onClick={() => actionConfirm(idSale)}
                  >
                    CONFIRMAR
                  </button>
                </>
              )}
            {message?.status === 200 && (
              <button
                className='confirm'
                style={{ margin: '0 auto' }}
                onClick={() =>
                  message.action !== undefined
                    ? message.action(
                        carritoData.items,
                        paymentData.buyer,
                        'tarjeta'
                      )
                    : closeModalConfirm()
                }
              >
                CONTINUAR
              </button>
            )}
            {message?.status === 400 && (
              <button
                className='cancel'
                style={{ margin: '0 auto' }}
                onClick={() => closeModalConfirm()}
              >
                CANCELAR
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ModalConfirm
