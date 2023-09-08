import Layout from "../components/layout"
import Product from "../components/product";
import Titles from "../components/titles";

export default function Tienda({ products, bag, agregarCarrito }) {
    return (
        <>
            <Layout title="Tienda" descripcion="Venta de playeras y curiosidades de gatitos" bag={bag}>
                <Titles>
                    <h1>Productos</h1>
                </Titles>
                <section className="grid gap-4 grid-cols-skills">
                    {
                        products?.map(product => (
                            <Product key={product.id} product={product.attributes} agregarCarrito={agregarCarrito} id={product.id} />
                        ))
                            .reverse()
                    }
                </section>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const response = await fetch(`${process.env.API_URL}/productos?populate=imagen`)
    const { data: products } = await response.json()
    return {
        props: { products }
    }
}

// export async function getServerSideProps() {
//     const response = await fetch(`${process.env.API_URL}/productos?populate=imagen`)
//     const { data: products } = await response.json()
//     return {
//         props: { products }
//     }
// }