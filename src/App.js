// Components:
import Header from "./components/Layout/Header";
import MealsList from "./components/Food/MealsList";
import Cart from "./components/Cart/Cart";
// Hook:
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalWindow = () => setIsModalOpen(true);
  const closeModalWindow = () => setIsModalOpen(false);

  return (
    <>
      <Header onOpenModalWindow={openModalWindow} />
      { isModalOpen && <Cart onCloseModalWindow={closeModalWindow} /> }
      <main>
        <MealsList />
      </main>
    </>
  );
}

export default App;
