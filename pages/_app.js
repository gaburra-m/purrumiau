import { useState, useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const carritoLS = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  const [carrito, setCarrito] = useState(carritoLS)
  const [paginaLista, setPaginaLista] = useState(false)
  const [bag, setBag] = useState(0)


  useEffect(() => { // useEffect para el error de hidratación al comparar el carrito entre server y cliente
    setPaginaLista(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
    const calculoBag = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    )
    setBag(calculoBag)
  }, [carrito])

  const agregarCarrito = product => {
    if (carrito.some(productState => productState.id === product.id)) {
      const carritoActualizado = carrito.map(productState => {
        if (productState.id === product.id) {
          productState.cantidad = product.cantidad
        }
        return productState
      })
      setCarrito([...carritoActualizado])
      localStorage.setItem('carrito', JSON.stringify(carrito))
    } else {
      setCarrito([...carrito, product])
      localStorage.setItem('carrito', JSON.stringify(carrito))
    }
  }

  const actualizarCantidad = product => {
    const carritoActualizado = carrito.map(productState => {
      if (productState.id === product.id) {
        productState.cantidad = parseInt(product.cantidad)
      }
      return productState
    })
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter(product => product.id != id)
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  return paginaLista ? <Component {...pageProps}
    carrito={carrito}
    bag={bag}
    agregarCarrito={agregarCarrito}
    actualizarCantidad={actualizarCantidad}
    eliminarProducto={eliminarProducto}
  // handleTotal={handleTotal}
  /> : null
}

export default MyApp
