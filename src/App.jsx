import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import Description from "./pages/Description";
import RelatedProducts from "./pages/RelatedProducts";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <ProductPage />
      <Description />
      <RelatedProducts />
      <Footer />
    </div>
  );
}

export default App;
