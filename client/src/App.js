import { QueryClient, QueryClientProvider } from "react-query";
import Products from "./components/products/Products";
import { StateProvider } from "./components/state/state";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";

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
  return (
    <StateProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Products />} />
              <Route path="products" element={<Products />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </StateProvider>
  );
}

export default App;
