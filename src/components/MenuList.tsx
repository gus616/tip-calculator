import {MenuItem as MenuItemType, OrderItem } from '../types'
import MenuItem from './MenuItem';
import OrderContents from './OrderContents';
import OrderSummary from './OrderSummary';
import TipPercentageForm from './TipPercentageForm';


type menuProps = {
    menuItems: MenuItemType[],
    addItem: (item: MenuItemType) => void,
    order: OrderItem[],
    onDelete: (id: MenuItemType['id']) => void,
    tip: number,
    onSetTip: (tip: number) => void
}

const MenuList = ({ menuItems, addItem, order, onDelete, tip, onSetTip}: menuProps) => {
    return (
        <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
            <div className="p-5">
                <h2 className="text-4xl font-black">Menu</h2>
                <div className="space-y-3 mt-10">
                    {
                        menuItems.map((item) => (
                            <MenuItem key={item.id} item={item} addItem={addItem} />
                        ))
                    }
                </div>

            </div>

            <div className="border border-dashed border-slate-400 p-5 rounded-lg space-y-10">
               <OrderContents orderItems={order} onDelete={onDelete} />
               <TipPercentageForm setTip={onSetTip}/>
               <OrderSummary orderItems={order} tip={tip}/>
            </div>
        </main>
    )
}

export default MenuList