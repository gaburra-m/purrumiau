import Layout from "../components/layout"
import Titles from "../components/titles"
import CardProduct from "../components/card-product"
import Banner from "../components/banner";

export default function Home({ bag, products, banner }) {
  console.log(banner);
  return (
    <>
      <Layout title="Inicio" descripcion="Venta de playeras y curiosidades de gatitos" bag={bag}>
        <Banner banner={banner} />
        <section>
          <Titles>
            <h2>Nueva Colección</h2>
          </Titles>
          <div className="grid gap-4 grid-cols-skills-sm">
            {products?.map((product) => (
              <CardProduct key={product.id} product={product.attributes} />
            ))
              .reverse()
              .slice(0, 3)}
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const urlProducts = `${process.env.API_URL}/productos?populate=imagen`
  const urlBanner = `${process.env.API_URL}/banner?populate=imagen`

  const [resProducts, resBanner] = await Promise.all([
    fetch(urlProducts),
    fetch(urlBanner)
  ])

  const [{ data: products }, { data: banner }] =
    await Promise.all([resProducts.json(), resBanner.json()])

  return {
    props: {
      products,
      banner
    }
  }
}