import { useState } from 'react';
import { MenuItem, OrderItem } from '../types';

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);


  const addItem = (item: MenuItem) => {
    const itemExists = order.find((orderItem) => orderItem.id === item.id);


    if (itemExists) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );

      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const deleteItem = (id: number) => {
    const itemExists = order.find((orderItem) => orderItem.id === id);

    if(!itemExists) return;

    setOrder(order.filter(item => item.id !== id));
  } 


  return {
    order,
    addItem,
    deleteItem,
    tip,
    setTip
  };
};

export default useOrder;
