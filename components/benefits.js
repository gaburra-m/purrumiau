import CardBenefits from "./card-benefits"
import { ShippingIcon, PayIcon, SupportIcon, WarrantyIcon } from "./icons"

export default function Benefits() {
    return (
        <section className="grid grid-cols-1 gap-3 mb-4 md:grid-cols-2 lg:grid-cols-4">
            <CardBenefits titulo={"Envío Gratis"} desc={"Todos nuestros productos cuentan con envío gratis a todo México."}>
                <ShippingIcon w={40} h={40} />
            </CardBenefits>
            <CardBenefits titulo={"Pagos Seguros"} desc={"Los pagos se realizan a través de Transferencia, Paypal o Mercadopago."}>
                <PayIcon w={40} h={40} />
            </CardBenefits>
            <CardBenefits titulo={"Garantía"} desc={"Todos nuestros productos cuentan con garantía."}>
                <WarrantyIcon w={40} h={40} />
            </CardBenefits>
            <CardBenefits titulo={"Atención Personalizada"} desc={"Estamos para resolver cualquier duda que tengas."}>
                <SupportIcon w={40} h={40} />
            </CardBenefits>
        </section>
    )
}
