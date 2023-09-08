import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children, title = "", descripcion = "", bag }) {
    return (
        <>
            <Head>
                <title>{`Purrumiau - ${title}`}</title>
                <meta name="description" content={descripcion} />

            </Head>
            <Header bag={bag} />
            <main className="container max-w-5xl px-2 mx-auto min-h-[450px]">
                {children}
            </main>
            <Footer />
        </>
    )
}
