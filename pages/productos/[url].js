import { useState } from "react"
import Image from "next/image"
import Layout from "../../components/layout"
import Titles from "../../components/titles";
import { PlusIcon, MinusIcon, CartIcon } from "../../components/icons";

export default function Producto({ product, agregarCarrito, bag }) {
    const [cantidad, setCantidad] = useState(1)
    const { nombre, descripcion, imagen, precio } = product[0].attributes
    const [aviso, setAviso] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (cantidad < 1) {
            return
        }

        const productoSeleccionado = {
            id: product[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        agregarCarrito(productoSeleccionado)
        setAviso(true)
        setTimeout(() => {
            setAviso(false)
        }, 3000)
    }
    return (
        <Layout title={nombre} bag={bag}>
            <section className="flex flex-wrap items-start gap-4 mb-4 md:flex-nowrap">
                <Image src={imagen.data.attributes.url} alt={`imagen del producto ${nombre}`} width={500} height={350} className="rounded-2xl bg-[#f8f9fc] p-1" />
                <aside className="flex flex-col items-start w-full">
                    <Titles>
                        <h1>{nombre}</h1>
                    </Titles>
                    <div className="rounded-2xl bg-[#f8f9fc] px-6 py-4">
                        <h2 className="mb-2 text-xl font-semibold text-slate-900">Descripción</h2>
                        <p className="text-slate-700">{descripcion}</p>
                    </div>

                </aside>
            </section>
            <section className="flex items-center justify-between rounded-2xl bg-[#d2f4fd] px-6 py-4 gap-2 relative">
                <p className="text-3xl font-semibold text-sky-900">${precio}</p>
                <form onSubmit={handleSubmit} className="flex items-center gap-4">
                    <div className="flex items-center justify-center gap-2 text-2xl">
                        <button
                            className="text-pink-800 transition-colors rounded-full bg-pink-50 hover:bg-pink-800 hover:text-pink-50"
                            type="button"
                            onClick={() => {
                                if (cantidad <= 0) {
                                    return
                                }

                                setCantidad(cantidad - 1)
                            }}
                        >
                            <MinusIcon w={30} h={30} />
                        </button>
                        <p className="text-center w-7">{cantidad}</p>
                        <button
                            className="text-pink-800 transition-colors rounded-full bg-pink-50 hover:bg-pink-800 hover:text-pink-50"
                            type="button"
                            onClick={() => {
                                setCantidad(cantidad + 1)
                            }}
                        ><PlusIcon w={30} h={30} /></button>
                    </div>
                    <button className={`flex items-center gap-2 px-4 py-1  transition-colors rounded-full ${cantidad < 1 ? "bg-gray-200 text-gray-600 cursor-not-allowed" : "bg-purple-50 hover:bg-purple-800 text-purple-800 hover:text-purple-50"}`} type="submit">
                        <CartIcon w={30} h={30} />
                        <p className="hidden font-medium md:block">Agregar </p>
                    </button>
                </form>
                {aviso && (
                    <div className="absolute left-0 flex items-center justify-center w-full px-16 py-4 text-green-900 bg-green-50 rounded-2xl -top-full">
                        <p>Se agrego al carrito</p>
                    </div>
                )}
            </section>

        </Layout>
    )
}

export async function getStaticPaths() {
    const response = await fetch(`${process.env.API_URL}/productos`)
    const { data } = await response.json()
    const paths = data.map(product => ({
        params: {
            url: product.attributes.url
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { url } }) {
    const response = await fetch(`${process.env.API_URL}/productos?filters[url]=${url}&populate=imagen`)
    const { data: product } = await response.json()

    return {
        props: { product }
    }
}