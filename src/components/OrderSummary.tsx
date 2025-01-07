import { useCallback, useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers/indext"


type OrderSummaryProps = {
    orderItems: OrderItem[],
    tip: number
}

const OrderSummary = ({ orderItems, tip }: OrderSummaryProps) => {

    //useMemo approach
    const subtotalAmount = useMemo(() => {
        return orderItems.reduce((total, item) => total + (item.quantity * item.price), 0)
    }, [orderItems]);


    const tipAmount = useMemo(() => subtotalAmount * tip , [tip, subtotalAmount]);

    const totalAmount = useMemo(() => subtotalAmount + (subtotalAmount * tip), [subtotalAmount, tip]);


    //useCallBack

    const subtotal = useCallback(() => orderItems.reduce((total, item) => total + (item.quantity * item.price), 0), [orderItems]);

    const tipCalculated = useCallback(() => subtotal() * tip, [tip, subtotal])

    const totalCalculated = useCallback(() => subtotal() + tipCalculated(), [subtotal, tipCalculated]);

    console.log('total calculated: ', totalCalculated());

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