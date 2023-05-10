import { GlobalContent } from "./global-content/GlobalContent";
import { CartProvider } from "./store/CartContext";

const App = () => {
  return (
    <CartProvider>
      <GlobalContent />
    </CartProvider>
  );
};

export default App;
