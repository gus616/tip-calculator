import { MenuItem, OrderItem } from '../types'
import { formatCurrency } from '../helpers/indext'

type OrderContentsProps = {
    orderItems: OrderItem[],
    onDelete: (id: MenuItem['id']) => void
}

const OrderContents = ({ orderItems, onDelete }: OrderContentsProps) => {
    return (
        <div>
            <h2 className="text-4xl font-black">Order</h2>

            <div className="space-y-3 mt-10">
                {orderItems.length === 0 ? <p className="text-center">
                    Order is empty
                </p> : <ul>
                    {orderItems.map(item => (
                        <li key={item.id} className="border-t border-gray-200">
                            <div className="flex justify-between items-center py-5 last-of-type:border-b">
                                <div>  
                                <p className="text-lg">
                                    {item.name} - {formatCurrency(item.price)}
                                </p>
                                    <p className="font-black">
                                        Quantity: {item.quantity}
                                    </p>
                                </div>
                                <button onClick={() => onDelete(item.id)}
                                    className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                                >X</button>
                            </div>
                        </li>
                    ))}
                </ul>}
            </div>
        </div>
    )
}

export default OrderContents