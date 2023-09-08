import Image from 'next/image'
import Link from 'next/link'

export default function CardProduct({ product }) {
    const { imagen, nombre, precio, url } = product
    return (
        <article className='flex flex-col gap-2 mb-12 group'>
            <Image src={imagen.data.attributes.formats.medium.url} alt={product.nombre} width={300} height={300} className="rounded-2xl bg-[#f8f9fc] p-1 group-hover:bg-[#d2f4fd] transition-colors w-full" />
            <header className="flex flex-col gap-1 rounded-2xl bg-[#f8f9fc] px-6 py-3 ">
                <h3 className="text-xl font-semibold">{nombre}</h3>
            </header>
            <footer className='relative flex items-center justify-between px-6 py-4 bg-[#d2f4fd] rounded-2xl'>
                <p className="text-3xl font-semibold text-sky-900">${precio}</p>
                <div className='flex items-center gap-2'>

                    <Link href={`/productos/${url}`} className="px-4 py-2 bg-[#f8f9fc] rounded-full  text-pink-700 transition-colors font-semibold hover:bg-pink-700 hover:text-white border-2 border-transparent">Ver Producto</Link>

                </div>
            </footer>
        </article>
    )
}
