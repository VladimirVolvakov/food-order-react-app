// Components:
import Header from "./components/Layout/Header";
import MealsList from "./components/Food/MealsList";
import Cart from "./components/Cart/Cart";
// Hook:
import { useState } from "react";
// Context:
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalWindow = () => setIsModalOpen(true);
  const closeModalWindow = () => setIsModalOpen(false);

  return (
    <CartContextProvider>
      <Header onOpenModalWindow={openModalWindow} />
      { isModalOpen && <Cart onCloseModalWindow={closeModalWindow} /> }
      <main>
        <MealsList />
      </main>
    </CartContextProvider>
  );
}

export default App;
