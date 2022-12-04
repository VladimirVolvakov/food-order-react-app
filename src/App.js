// Components:
import Header from "./components/Layout/Header";
import MealsList from "./components/Food/MealsList";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Header />
      <main>
        <MealsList />
        <Cart />
      </main>
    </>
  );
}

export default App;
