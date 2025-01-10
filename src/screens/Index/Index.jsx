import './index.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import OurServices from './OurServices'

const Index = () => {
  const reviews = [
    {
      text: 'Es un capo, mas alla de ser mi amorsote brindando un servicio de excelente calidad.',
      photo:
        'https://buffer.com/library/content/images/2022/03/sigmund-MQ2xYBHImKM-unsplash--1--1.jpg',
      name: 'Rocio Ibañez',
      rol: 'Cliente'
    },
    {
      text: 'My nigga sabe lo que sabe, deja trabajar a la gente que sabe.',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGD0BcxwuvdI1H-S35GmT43vP2MBIdCgyeIA&usqp=CAU',
      name: 'Facundo Fernandez',
      rol: 'Cliente'
    },
    {
      text: 'Moje mi macbook pro con un aperol y el pibe me la dejo re flama sumamente funcional.',
      photo:
        'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg',
      name: 'Juan Amaturo',
      rol: 'Cliente'
    }
  ]
  return (
    <div className='index'>
      <Header />
      <div className='container-index'>
        <div className='home'>
          <h2>Bienvenido/a a</h2>
          <h1>Colibrí Premium Service</h1>

          <button className='btn-contact'>¡Contactános!</button>
        </div>
        <OurServices/>
      </div>
      <Footer />
    </div>
  )
}

export default Index
