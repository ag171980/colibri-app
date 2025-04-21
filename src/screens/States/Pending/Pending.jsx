import HeaderAdmin from '../../../components/HeaderAdmin/HeaderAdmin'
import { Link } from 'react-router-dom'
import './Pending.css'

import IconPending from '../../../assets/icons/confirm.png'

const Pending = () => {
  return (
    <div className='container-pending'>
      <HeaderAdmin />
      <div className='pending'>
        <img src={IconPending} alt='' />
        <h1>Pago Pendiente</h1>
        <p>Tu pago se encuentra en estado pendiente.</p>
        <Link to={'/'}>VOLVER AL INICIO</Link>
      </div>
    </div>
  )
}

export default Pending
