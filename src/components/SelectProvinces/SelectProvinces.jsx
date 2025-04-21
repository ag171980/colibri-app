import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const SelectProvinces = ({ setProvince }) => {
  const { buyer } = useSelector(state => state.buyer)
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

  useEffect(() => {
    setProvince(buyer.province)
  }, [])
  return (
    <select
      onChange={e => setProvince(e.target.value)}
      className='province'
      name='province'
      id='province'
    >
      {buyer.province && (
        <option value={buyer.province}>
          {buyer.province}
        </option>
      )}
      {provinces.sort().map((province, key) => (
        <option key={key} value={province}>
          {province}
        </option>
      ))}
    </select>
  )
}

export default SelectProvinces
