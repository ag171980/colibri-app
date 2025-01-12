import React from 'react'

import './tyc.css'
const TyC = () => {
  return (
    <div className='container-tyc'>
      <h2>Términos y condiciones</h2>
      <div className='info info-repairs'>
        <h4>Información importante para Reparaciones</h4>
        <ol>
          <li>
            Garantía: La garantía cubre únicamente las fallas reparadas
            por Colibri Premium Service. No nos responsabilizamos por
            reparaciones realizadas por terceros.
          </li>
          <li>
            Riesgos de Reparación: Dispositivos iPad / Apple Watch tienen un
            índice de riesgo de daño en la pantalla al ser destapados para su
            revisión o reparación. Los dispositivos mojados o previamente
            manipulados no están cubiertos por la garantía de la reparación
            solicitada. 
          </li>
          <li>
            Pérdida de Información: Informamos que existe un índice riesgo de
            pérdida de información en dispositivos que ingresen para reparar, ya
            sea por fallas o daños. No realizamos backup o respaldo de datos.
          </li>
          <li>
            Costos Adicionales: Dispositivos que ingresen apagados, es decir no
            prenden/no cargan y presenten fallas adicionales una vez encendidos
            estarán sujetos a costos adicionales de reparación.
          </li>
          <li>
            Exclusiones de Garantía: Algunos modelos específicos, como iPhone 7
            Model A1660 e iPhone 7 Plus Model A1661, no están cubiertos por la
            garantía de la reparación por fallas de radiofrecuencia, por
            defectos de fabricación.
          </li>
        </ol>
      </div>

      <div className='info time-repairs'>
        <h4>Tiempos de Reparación</h4>
        <p>
          En Colibri Premium Service, nos esforzamos por hacer tu vida más
          fácil. ¿Por qué perder tiempo y energía desplazándote por la ciudad
          cuando podemos venir a ti? Nuestra ventaja radica en ofrecerte un
          servicio de logística dentro de Capital Federal, Buenos Aires,
          Argentina. Esto significa que puedes relajarte en tu oficina,casa o en
          la universidad, ¡nosotros nos encargamos de recoger tu dispositivo
          para su reparación o hacerte llegar tu comprar accesorios! ¡Todo a tu
          conveniencia!
        </p>
        <ol>
          <li>
            Reparaciones de periféricos como cambio de pantalla o batería pueden
            demorar entre 24 y 48 horas hábiles, dependiendo de la demanda y el
            horario de ingreso del dispositivo.
          </li>
          <li>
            Reparaciones por falla de placa pueden demorar entre 24 y 72 horas
            hábiles. En caso de alguna demora, nos comprometemos a informarte
            dentro de este plazo.
          </li>
        </ol>
      </div>

      <div className='info requests'>
        <h4>Requisitos de Ingreso</h4>
        <p>
          Todos los equipos deben ingresar con su código IMEI / número de serie
          legible y clave de desbloqueo para recibir cobertura de reparación.
          Los equipos que no cumplan con estos requisitos no serán aceptados
          para reparación, sin excepciones.
        </p>
      </div>
    </div>
  )
}

export default TyC
