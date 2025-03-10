import React from 'react'

const SelectProvinces = ({ setProvince }) => {
  const provinces = [
    'Buenos Aires',
    'CABA',
    'Jujuy',
    'Salta',
    'Tucumán',
    'Sgo. del Estero',
    'Formosa',
    'Catamarca',
    'Chaco',
    'Corrientes',
    'Misiones',
    'La Rioja',
    'San Juan',
    'Córdoba',
    'Santa Fe',
    'Entre Ríos',
    'San Luis',
    'Mendoza',
    'La Pampa',
    'Neuquén',
    'Río Negro',
    'Chubut',
    'Santa Cruz',
    'Tierra del Fuego'
  ]
  return (
    <select
      onChange={e => {
        console.log(e.target.value)

        setProvince(e.target.value)
      }}
      className='province'
      name='province'
      id='province'
    >
      {provinces.sort().map((province, key) => (
        <option key={key} value={province}>
          {province}
        </option>
      ))}
    </select>
  )
}

export default SelectProvinces
