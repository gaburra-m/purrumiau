import Image from "next/image"
import Link from "next/link"

export default function Banner({ banner }) {
    const { contenido, imagen, titulo } = banner.attributes
    return (
        <section className="flex flex-wrap-reverse justify-center gap-3 p-4 mb-4 overflow-hidden md:flex-nowrap bg-pink-50 rounded-2xl">
            <div className="flex flex-col gap-5 px-4 pt-2 md:w-[50%]">
                <h2 className="text-4xl font-bold text-pink-800 md:text-5xl">{titulo}</h2>
                <p className="flex-1 text-slate-800">{contenido}</p>
                <Link href={"/productos/purrr-love"} className="px-8 py-4 text-xl font-semibold text-center text-pink-800 transition-colors bg-pink-100 border-2 border-pink-800 rounded-full hover:bg-pink-800 hover:text-pink-50">
                    Conócela y Enamórate
                </Link>
            </div>
            <Image src={imagen.data.attributes.url} width={500} height={500} alt={titulo} className="w-full rounded-2xl md:w-[50%]" />
        </section>
    )
}
