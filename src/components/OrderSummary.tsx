import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers/indext"


type OrderSummaryProps = {
    orderItems: OrderItem[],
    tip: number
}

const OrderSummary = ({ orderItems, tip }: OrderSummaryProps) => {

    const subtotalAmount = useMemo(() => {
        return orderItems.reduce((total, item) => total + (item.quantity * item.price), 0)
    }, [orderItems]);


    const tipAmount = useMemo(() => subtotalAmount * tip , [tip, subtotalAmount]);

    const totalAmount = subtotalAmount + (subtotalAmount * tip);


    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">
                    Totals and Tips
                </h2>
                <p>
                    Subtotal: <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>

                <p>
                    Tip: <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>

                <p>
                    Total: <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>
            <button></button>
        </>
    )
}

export default OrderSummary