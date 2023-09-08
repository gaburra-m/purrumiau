import Image from "next/image"
import Link from "next/link"

import Nav from "./nav"

export default function Header({ bag }) {
    return (
        <header className="container flex max-w-5xl gap-2 px-2 mx-auto mt-4 mb-4 md:gap-4">
            <Link href={'/'}>
                <Image src="/img/logo.webp" alt="Logotipo de Purrumiau" width={70} height={67} className="p-3 bg-[#d2f4fd] rounded-2xl min-w-[70px] z-30 relative" />
            </Link>
            <Nav bag={bag} />
        </header>
    )
}
