import { GlobalContent } from "./global-content/GlobalContent";
import { CartProvider } from "./store/CartContext";
import { useCounter } from "./hooks/Counter";
import { Button } from "./components/UI/Button";

const App = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <CartProvider>
      <GlobalContent />
      <div>
        <Button onClick={increment}>+</Button>
        <h1>{count}</h1>
        <Button onClick={decrement}>-</Button>
      </div>
    </CartProvider>
  );
};

export default App;
