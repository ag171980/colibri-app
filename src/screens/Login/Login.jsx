import React, { useState } from 'react'
import LoginCSS from './login.module.css'
import Logo from '../../assets/logo.svg'
import Alert from '../../components/Alert/Alert'
import { useNavigate } from 'react-router-dom'
import { userService } from '../../services/user.service'
import LoaderBtn from '../../components/LoaderBtn/LoaderBtn'
const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [stateButton, setStateButton] = useState('INGRESAR')
  const [alert, setAlert] = useState('')
  const handleSubmit = async e => {
    e.preventDefault()
    setStateButton(<LoaderBtn />)
    setTimeout(async () => {
      const response = await userService.signIn({ username, password })
      setAlert(response.message)
      if (response.status === 200) {
        navigate('/admin/home')
      }
      setTimeout(() => {
        setAlert('')
      }, 1500)
    }, 1500)
  }
  return (
    <>
      {alert && <Alert message={alert} />}
      <div className={LoginCSS.containerAdmin}>
        <header className={LoginCSS.headerAdmin}>
          <img src={Logo} alt='' />
        </header>
        <div className={LoginCSS.admin}>
          <h1>Ingresá</h1>
          <form
            onSubmit={e => handleSubmit(e)}
            action=''
            className={LoginCSS.formAdmin}
          >
            <div className={LoginCSS.input}>
              <label htmlFor='username'>Usuario</label>
              <input
                type='text'
                id='username'
                name='username'
                className={LoginCSS.username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className={LoginCSS.input}>
              <label htmlFor='password'>Contraseña</label>
              <input
                type='password'
                id='password'
                name='password'
                className={LoginCSS.password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button type='submit'>{stateButton}</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
