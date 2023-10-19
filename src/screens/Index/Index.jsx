import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import indexStyle from "./index.module.css";

import Accesories from "../../assets/accesories.png";
import About from "../../assets/about.png";

const Index = () => {
  const reviews = [
    {
      text: "Es un capo, mas alla de ser mi amorsote brindando un servicio de excelente calidad.",
      photo:
        "https://buffer.com/library/content/images/2022/03/sigmund-MQ2xYBHImKM-unsplash--1--1.jpg",
      name: "Rocio Ibañez",
      rol: "Cliente",
    },
    {
      text: "My nigga sabe lo que sabe, deja trabajar a la gente que sabe.",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGD0BcxwuvdI1H-S35GmT43vP2MBIdCgyeIA&usqp=CAU",
      name: "Facundo Fernandez",
      rol: "Cliente",
    },
    {
      text: "Moje mi macbook pro con un aperol y el pibe me la dejo re flama sumamente funcional.",
      photo:
        "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
      name: "Juan Amaturo",
      rol: "Cliente",
    },
  ];
  return (
    <div className={indexStyle.Index}>
      <Header />
      <div className={indexStyle.containerIndex}>
        <div className={indexStyle.main}>
          <h1>
            Encantados de brindarte la solucion que precisas para tus
            dispositivos Apple.
          </h1>
          <p>
            En reparaciones de nivel componentes, cambio de pantalla, baterias y
            entre otros perifericos, brindandote la solucion en esos momentos de
            apuros.
          </p>

          <button className={indexStyle.btnContact}>
            CONTACTA POR TU REPARACION
          </button>
        </div>
        <div className={indexStyle.about}>
          <div className={indexStyle.descriptionAbout}>
            <h2>Que debo conocer ingresar mi equipo a reparar</h2>
            <p>
              La reparacion de la placa o microcomponentes demoran 24/72hs
              dentro del horario habil de trabajo. El tiempo comienza a correr
              una vez el equipo haya ingresado.
            </p>
            <button>CONOCÉ MAS</button>
          </div>
          <img src={About} alt="" />
        </div>
        <div className={indexStyle.accesories}>
          <h2>Accesorios para tu dispositivo.</h2>
          <div className={indexStyle.descriptionAccesories}>
            <div className={indexStyle.description}>
              <p>
                Te hacemos llegar el accesorio que precisas en esos momentos de
                apuro, brindarte calidad y garantia.
              </p>
              <button>SELECCIONA TU ACCESORIO</button>
            </div>
            <img src={Accesories} alt="" />
          </div>
        </div>
        <div className={indexStyle.province}>
          <h2>¿Eres del interior del pais?</h2>
          <p>
            No hay problema. Trabajamos con los servicios de logistica de tu
            preferencia, tanto Correo Argentino como Andreani o comisionista de
            tu confianza.
          </p>

          <button>PLANIFICA TU REPARACION</button>
        </div>
        <div className={indexStyle.reviews}>
          <h2>Opiniones del cliente</h2>

          <div className={indexStyle.containerReviews}>
            {reviews.map((review, index) => (
              <div key={index} className={indexStyle.review}>
                <p className={indexStyle.opinion}>"{review.text}"</p>
                <div className={indexStyle.profileUser}>
                  <img src={review.photo} alt="" />
                  <div className={indexStyle.dataUser}>
                    <h4>{review.name}</h4>
                    <span>{review.rol}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
