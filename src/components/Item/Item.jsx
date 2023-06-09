//Card indivual por producto

import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>Precio: $ {precio} </p>
        <Link to={`/item/${id}`} className='link'> <button>Ver Detalles</button> </Link>
    </div>
  )
}

export default Item