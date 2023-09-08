import { useState, useEffect } from "react"
import Image from "next/image"
import Layout from "../components/layout"
import Titles from "../components/titles"
import { PlusIcon, MinusIcon, DeleteIcon, CheckoutIcon } from "../components/icons";

export default function Carrito({ carrito, actualizarCantidad, eliminarProducto, bag }) {
    const [total, setTotal] = useState(0)
    const [aviso, setAviso] = useState(false)

    useEffect(() => {
        const calculoTotal = carrito.reduce(
            (total, producto) => total + producto.cantidad * producto.precio,
            0
        )
        setTotal(calculoTotal)
    }, [carrito])

    return (
        <Layout title="Carrito de compras" bag={bag}>
            <Titles>
                <h1>Carrito de Compras</h1>
            </Titles>
            <section className="flex flex-wrap items-start gap-6 md:flex-nowrap">
                <section className="relative w-full md:w-2/3">
                    {carrito.length === 0
                        ? <section className="flex flex-col items-center justify-center w-full gap-10 px-4 py-10 rounded-2xl bg-sky-50">
                            <Image src={"/img/carrito-vacio.webp"} width={100} height={100} alt="Imagen de gatito dormido, carrito vacío" />
                            <p className="text-3xl font-semibold text-sky-700">El carrito esta vacío</p>
                        </section>
                        : carrito.map(product => (
                            <article key={product.id} className="relative flex flex-wrap items-start w-full gap-3 mb-8 ">
                                <Image width={250} height={200} src={product.imagen} alt={product.nombre} className="rounded-2xl bg-[#f8f9fc] p-1 w-full md:w-1/3" />
                                <footer className="flex flex-col items-start flex-1 gap-2 ">
                                    <section className="flex items-center justify-between w-full gap-2">
                                        <p className="rounded-2xl bg-[#f8f9fc] py-2 px-4 w-full text-xl">{product.nombre}</p>
                                        <button
                                            type="button"
                                            onClick={() => {

                                                setAviso(true)
                                                setTimeout(() => {
                                                    setAviso(false)
                                                }, 1500)
                                                eliminarProducto(product.id)

                                            }}
                                            className="flex items-center gap-2 px-4 py-2 text-red-600 transition-colors bg-red-100 rounded-full hover:bg-red-600 hover:text-red-100">
                                            <DeleteIcon w={30} h={30} />
                                            <p className="hidden font-medium lg:block">Eliminar</p>

                                        </button>
                                    </section>
                                    <section className="flex items-center gap-4 rounded-2xl bg-[#f8f9fc] py-2 px-4 w-full">
                                        <p>Cantidad:</p>
                                        <div className="flex items-center gap-2 text-2xl ">
                                            <button
                                                className="text-pink-800 transition-colors rounded-full bg-pink-50 hover:bg-pink-800 hover:text-pink-50"
                                                type="button"
                                                onClick={() => {
                                                    if (product.cantidad <= 1) {
                                                        eliminarProducto(product.id)
                                                        return
                                                    }
                                                    actualizarCantidad({
                                                        id: product.id,
                                                        cantidad: product.cantidad - 1,
                                                    })
                                                }}
                                            >
                                                <MinusIcon w={30} h={30} />
                                            </button>
                                            <p className="text-center w-7 text-slate-800">{product.cantidad}</p>
                                            <button
                                                className="text-pink-800 transition-colors rounded-full bg-pink-50 hover:bg-pink-800 hover:text-pink-50"
                                                type="button"
                                                onClick={() =>
                                                    actualizarCantidad({
                                                        id: product.id,
                                                        cantidad: product.cantidad + 1,
                                                    })
                                                }
                                            ><PlusIcon w={30} h={30} /></button>

                                        </div>

                                    </section>
                                    <section className="flex justify-between items-center rounded-2xl bg-[#d2f4fd] py-2 px-4 w-full text-sky-900 text-xl">
                                        <p className="">
                                            Precio $<span className="font-semibold ">{product.precio}</span>
                                        </p>
                                        <p>
                                            Subtotal: $
                                            <span className="font-semibold ">{product.cantidad * product.precio}</span>
                                        </p>

                                    </section>
                                </footer>
                            </article>
                        ))
                    }
                    {aviso && (
                        <div className="absolute top-0 left-0 flex items-center justify-center w-full px-16 py-4 text-red-900 bg-red-50 rounded-2xl">
                            <p>Se elimino el producto</p>
                        </div>
                    )}
                </section>
                <aside className="flex flex-col w-full gap-4 md:w-1/3 text-slate-800">
                    <section className="flex flex-col w-full gap-4 px-6 py-4 text-xl rounded-2xl bg-blue-50">
                        <h3 className="text-xl font-semibold">Resumen del Pedido</h3>
                        <p className="text-xl ">Total a pagar: $<span className="text-xl font-semibold">{total}</span></p>
                    </section>
                    <button className="flex items-center justify-center w-full gap-2 px-4 py-2 text-white transition-colors rounded-full bg-sky-700 hover:bg-sky-800">
                        <CheckoutIcon w={30} h={30} />
                        <p className="text-xl">Finalizar Compra</p></button>
                </aside>

            </section>

        </Layout>
    )
}
