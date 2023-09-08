import Benefits from "./benefits"

export default function Footer() {
    const today = new Date()
    const year = today.getUTCFullYear()
    return (
        <footer className="container flex flex-col max-w-5xl gap-2 px-2 mx-auto mt-12 mb-4">
            <Benefits />
            <section className="bg-[#f8f9fc] rounded-2xl px-6 py-3 flex justify-between text-sky-900 font-semibold">
                <p>©{year} Purrumiau</p>
                <p>Realizado por <a
                    className="text-pink-800 border-pink-800 hover:border-b-2"
                    href="https://gaburra.vercel.app/"
                    target="_blank"
                    rel="noreferrer
      noopener">Gaburra</a></p>
            </section>
        </footer>
    )
}
