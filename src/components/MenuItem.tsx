import { MenuItem as MenuItemType } from "../types"

type menuItemProps = {
    item: MenuItemType,
    addItem: (item: MenuItemType) => void
}


const MenuItem = ({ item, addItem }: menuItemProps) => {
    const onAddItemHandler = (item: MenuItemType) => {
        addItem(item);
    }
    return (
        <button onClick={() => onAddItemHandler(item)} className="border-2 border-teal-400 rounded-lg hover:bg-teal-200 w-full p-3 flex justify-between">
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}

export default MenuItem