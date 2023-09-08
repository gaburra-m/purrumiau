import React from 'react'

export default function CardBenefits({ titulo, desc, children }) {
    return (
        <article className="flex flex-col gap-3 p-4 text-purple-800 transition-colors border-2 border-transparent rounded-2xl bg-purple-50 hover:border-purple-200">
            {children}
            <h3 className="items-start text-2xl font-bold text-purple-900">{titulo}</h3>
            <p>{desc}</p>
        </article>
    )
}
