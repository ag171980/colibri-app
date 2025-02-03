import React from 'react'
import Alert from 'react-bootstrap/Alert'
import { IoAlertCircleOutline, IoCheckmarkCircleOutline } from 'react-icons/io5'

import AlertCSS from './alert.module.css'

const CustomAlert = ({ alert }) => {
  return (
    <Alert
      className={`${AlertCSS.alert} ${
        alert.variant === 'danger'
          ? AlertCSS.alertDanger
          : AlertCSS.alertSuccess
      }`}
      key={alert.variant}
      variant={alert.variant}
    >
      <div className={AlertCSS.icon}>
        {alert.variant === 'danger' ? (
          <IoAlertCircleOutline />
        ) : (
          <IoCheckmarkCircleOutline />
        )}
      </div>
      <p>{alert.msg}</p>
    </Alert>
  )
}

export default CustomAlert
