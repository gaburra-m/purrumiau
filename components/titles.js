

export default function Titles({ children }) {
    return (
        <section className="flex items-center bg-[#f8f9fc] rounded-2xl gap-2 px-6 py-4 text-3xl md:text-4xl font-semibold text-slate-700 mb-4 w-full">
            {children}
        </section>
    )
}
