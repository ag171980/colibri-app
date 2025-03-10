export const formatPrice = precio => {
  return new Intl.NumberFormat('es-AR', {
    style: 'decimal',
    minimumFractionDigits: 0, // Para asegurarte de tener dos decimales
    maximumFractionDigits: 0
  }).format(precio)
}
