import './Refused.css'
import HeaderAdmin from '../../../components/HeaderAdmin/HeaderAdmin'
import { Link } from 'react-router-dom'

import IconRefused from '../../../assets/icons/error.png'
const Refused = () => {
  return (
    <div className='container-refused'>
      <HeaderAdmin />
      <div className='refused'>
        <img src={IconRefused} alt='' />
        <h1>Pago Rechazado</h1>
        <p>Lamentamos comunicarte que tu pago fue rechazado.</p>
        <Link to={'/'}>VOLVER AL INICIO</Link>
      </div>
    </div>
  )
}

export default Refused
