import React from 'react'
import Productos from '../Productos/Productos';

const ContenedorProductos = () => {
    const paleta = {
        nombre: "Remera Nike",
        precio: 5000,
        img: "https://essential.vtexassets.com/arquivos/ids/619483-800-auto?v=637983323462970000&width=800&height=auto&aspect=true"
    };

    const pelota = {
        nombre: "Remera Adidas",
        precio: 7000,
        img: "https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/hx9vsbsf7ucy5689whgemvg0r7ee/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5"

    };

    const zapatilla = {
        nombre: "Topper",
        precio: 20000,
        img: "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-topper-x-forcer-blanca-14636933-800010021871001-1.jpg"
    };

    return (
        <div>
            <Productos {...pelota} />
            <Productos {...zapatilla} />
            <Productos {...paleta} />
        </div>
    );
}

export default ContenedorProductos