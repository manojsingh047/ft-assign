import { QueryClient, QueryClientProvider } from "react-query";
import Products from "./components/products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import reducers from "./components/state/reducers";
import { PRODUCTS_INITIAL_STATE } from "./components/state/products/reducer";
import { CART_INITIAL_STATE } from "./components/state/cart/reducer";
import { StateProvider } from "./components/state";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

function App() {
  const initialState = {
    productsState: PRODUCTS_INITIAL_STATE,
    cartState: CART_INITIAL_STATE,
  };
  return (
    <QueryClientProvider client={queryClient}>
      <StateProvider initialState={initialState} reducers={reducers}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Products />} />
              <Route path="products" element={<Products />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StateProvider>
    </QueryClientProvider>
  );
}

export default App;
