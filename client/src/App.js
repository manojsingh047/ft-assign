import { QueryClient, QueryClientProvider } from "react-query";
import Products from "./components/products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import reducers from "./state/reducers";
import { APP_INITIAL_STATE, StateProvider } from "./state";

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
    <QueryClientProvider client={queryClient}>
      <StateProvider initialState={APP_INITIAL_STATE} reducers={reducers}>
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
