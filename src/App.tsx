import Header from "./components/Header"
import MenuList from "./components/MenuList";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {

  const { order, addItem, deleteItem, tip, setTip} = useOrder();



  return (
    <>
      <Header />
      <MenuList menuItems={menuItems} addItem={addItem} order={order} onDelete={deleteItem} tip={tip} onSetTip={setTip} />
    </>
  )
}

export default App
