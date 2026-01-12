import ProductList from "./components/ProductList";
import { useProducts } from "./context/ProductContext";
import Header from "./components/Header";

const App = () => {

  const {loading,error,products} = useProducts();

  return ( 
  <>
      <Header/>
      <div className="card-container">
        <h1 className="card-container-h1">🛒 Product Catalog</h1>
        {loading && <p>Loading...</p>}
        {error && <div>❌ {error}</div>}
        {!loading && !error &&(
        <ProductList products={products}/>
        )}
      </div>
  </> );
 
}
export default App;