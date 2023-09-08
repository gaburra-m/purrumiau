import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CartIcon } from './icons'

export default function Product({ product, agregarCarrito, id }) {
    const [aviso, setAviso] = useState(false)
    const { imagen, nombre, precio, url, cantidad } = product

    const handleSubmit = (e) => {
        e.preventDefault()
        if (cantidad < 1) {
            return
        }

        const productoSeleccionado = {
            id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad: 1
        }

        agregarCarrito(productoSeleccionado)
        setAviso(true)
        setTimeout(() => {
            setAviso(false)
        }, 1500)
    }

    return (
        <article className="flex flex-col gap-2 mb-12 group">
            <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen del producto ${nombre}`} width={600} height={400} className="rounded-2xl bg-[#f8f9fc] p-1 group-hover:bg-[#d2f4fd] transition-colors" />
            <header className="flex flex-col gap-1 rounded-2xl bg-[#f8f9fc] px-6 py-3">
                <h3 className="text-xl font-semibold">{nombre}</h3>
            </header>
            <footer className='flex items-center justify-between rounded-2xl bg-[#d2f4fd] px-6 py-4 relative'>
                <p className="text-3xl font-semibold text-sky-900">${precio}</p>
                <div className='flex items-center gap-2'>

                    <Link href={`/productos/${url}`} className="px-4 py-2 bg-[#f8f9fc] rounded-full  text-pink-700 transition-colors font-semibold hover:bg-pink-700 hover:text-white border-2 border-transparent">Ver Producto</Link>

                    <button className="flex items-center gap-2 p-2 text-purple-800 transition-colors rounded-full bg-purple-50 hover:bg-purple-800 hover:text-purple-50" type="submit" onClick={handleSubmit}>
                        <CartIcon w={30} h={30} />
                    </button>
                </div>
                {aviso && (
                    <div className="absolute left-0 flex items-center justify-center w-full px-16 py-4 text-green-900 bg-green-50 rounded-2xl -top-full">
                        <p>Se agrego al carrito</p>
                    </div>
                )}
            </footer>

        </article>
    )
}
