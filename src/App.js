import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import Products from "./components/products/Products";
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
      <div className="App">
        <Navbar />
        <Products />
      </div>
    </QueryClientProvider>
  );
}

export default App;
