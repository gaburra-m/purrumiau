import Layout from "../components/layout"
import Titles from "../components/titles"
export default function Nosotros({ bag }) {
    return (
        <>
            <Layout title="Nosotros" descripcion="Venta de playeras y curiosidades de gatitos" bag={bag}>
                <Titles><h1>Nosotros</h1></Titles>
                <section className="rounded-2xl bg-[#f8f9fc] px-6 py-3 flex flex-col gap-4 mb-4">
                    <h3 className="text-2xl font-semibold">¡Bienvenido a Purrumiau!</h3>

                    <p className="max-w-[75ch]">En Purrumiau, somos apasionados por dos cosas: los gatos y la moda. Creemos que la ropa puede ser una expresión divertida y tierna de tu amor por estos adorables felinos, y es por eso que hemos creado una tienda especializada en playeras que harán que tu corazón se derrita de ternura.</p>
                </section>
                <section className="rounded-2xl bg-[#f8f9fc] px-6 py-3 flex flex-col gap-4 mb-4">
                    <h3 className="text-2xl font-semibold">Nuestra Historia</h3>

                    <p className="max-w-[75ch]">Nuestra historia comenzó con un grupo de amantes de los gatos que se reunieron para compartir su obsesión por estos peludos amigos. Todos compartíamos la misma pasión por la moda y la creatividad, así que decidimos combinar nuestras fuerzas para crear una tienda única en su tipo.</p>
                </section>
                <section className="rounded-2xl bg-[#f8f9fc] px-6 py-3 flex flex-col gap-4 mb-4">
                    <h3 className="text-2xl font-semibold">Nuestra Misión</h3>

                    <p className="max-w-[75ch]">En Purrumiau, nuestra misión es ofrecerte una amplia selección de playeras originales, diseñadas con cariño y dedicación. Queremos que cada prenda que compres en nuestra tienda sea una forma de mostrar tu amor por los gatos de una manera divertida y tierna. Además, nos comprometemos a ofrecer productos de alta calidad que no solo se vean geniales, sino que también sean cómodos de usar en tu día a día.</p>
                </section>
                <section className="rounded-2xl bg-[#f8f9fc] px-6 py-3 flex flex-col gap-4 mb-4">
                    <h3 className="text-2xl font-semibold">Nuestros Diseñadores</h3>

                    <p className="max-w-[75ch]">Trabajamos con diseñadores talentosos que comparten nuestra pasión por los gatos. Cada diseño que encontrarás en nuestra tienda es único y creado con atención a los detalles. Nos esforzamos por traerte nuevas y emocionantes colecciones con regularidad para que siempre encuentres algo fresco y adorable.</p>
                </section>
                <section className="rounded-2xl bg-[#f8f9fc] px-6 py-3 flex flex-col gap-4 mb-4">
                    <h3 className="text-2xl font-semibold">Compromiso con la Sostenibilidad</h3>

                    <p className="max-w-[75ch]">En Purrumiau, nos preocupamos por el medio ambiente. Por eso, nos esforzamos por tomar medidas sostenibles en nuestra operación, desde la elección de materiales respetuosos con el medio ambiente hasta la reducción de residuos en nuestros envíos.</p>
                </section>
                <section className="rounded-2xl bg-[#f8f9fc] px-6 py-3 flex flex-col gap-4 mb-4">
                    <h3 className="text-2xl font-semibold">Contáctanos</h3>

                    <p className="max-w-[75ch]">Estamos aquí para servirte y ayudarte en todo lo que necesites. Si tienes alguna pregunta, comentario o sugerencia, no dudes en ponerte en contacto con nuestro amigable equipo de atención al cliente. Estaremos encantados de ayudarte.</p>
                </section>
                <section className="rounded-2xl bg-[#f8f9fc] px-6 py-3 flex flex-col gap-4 mb-4">
                    <p className="max-w-[75ch]">¡Gracias por visitar Purrumiau y por unirte a nuestra comunidad de amantes de los gatos y la moda! Esperamos que disfrutes navegando por nuestra tienda y encuentres las playeras más tiernas y divertidas para complementar tu estilo.</p>

                    <p className="max-w-[75ch] text-xl font-semibold text-purple-900">¡Diviértete explorando nuestra tienda y mostrando tu amor por los gatos con estilo!</p>
                </section>
            </Layout>
        </>
    )
}