import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { CartIcon, CloseIcon, MenuIcon } from "./icons"

export default function Nav({ bag }) {
    const [toggle, setToggle] = useState(false)
    const router = useRouter()


    return (
        <nav className="flex items-center justify-between  w-full md:gap-4 gap-2 px-6 py-3 text-lg font-semibold text-slate-700 bg-[#f8f9fc] rounded-2xl">
            <div className={`flex md:flex-row md:gap-3  ${toggle ? "translate-x-0" : "translate-x-full"
                } md:translate-x-0 flex-col fixed top-0 right-0 md:static w-full h-full items-center justify-center md:justify-start z-20 bg-[#f8f9fc] gap-6 ease-in-out duration-300 md:text-lg text-3xl`}>
                <Link href="/" className={router.pathname === "/" ? "bg-pink-50 rounded-full md:px-4 md:py-1 px-8 py-2 text-pink-700" : "md:px-4 md:py-1 px-8 py-2 hover:bg-pink-50 hover:text-pink-700 rounded-full transition-colors"}>
                    Inicio
                </Link>
                <Link href="/tienda" className={router.pathname === "/tienda" ? "bg-pink-50 rounded-full md:px-4 md:py-1 px-8 py-2 text-pink-700" : "md:px-4 md:py-1 px-8 py-2 hover:bg-pink-50 hover:text-pink-700 rounded-full transition-colors"}>
                    Tienda
                </Link>
                <Link href="/nosotros" className={router.pathname === "/nosotros" ? "bg-pink-50 rounded-full md:px-4 md:py-1 px-8 py-2 text-pink-700" : "md:px-4 md:py-1 px-8 py-2 hover:bg-pink-50 hover:text-pink-700 rounded-full transition-colors"}>
                    Nosotros
                </Link>
            </div>
            <Link href={"/carrito"} className="flex items-center gap-1 px-4 py-1 text-pink-700 transition-colors border rounded-full border-slate-200 hover:bg-pink-50 hover:border-pink-50">
                <CartIcon w={30} h={35} />
                <p className="text-sm">${bag}</p>
            </Link>
            <button
                className="relative z-20 flex items-center gap-2 px-4 py-2 transition-colors border rounded-full border-primary hover:bg-pink-50 hover:border-pink-50 md:hidden"
                onClick={() => setToggle(!toggle)}
            >
                {toggle ? "Cerrar" : "Menú"}
                <span>{toggle ? <CloseIcon /> : <MenuIcon />}</span>
            </button>
        </nav>
    )
}
