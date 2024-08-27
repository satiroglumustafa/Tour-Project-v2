import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";
import Products from "./components/Products";

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setproducts] = useState([]);

  const fetchData = async () => {
    try {
      const url = "https://fakestoreapi.com/products";
      const request = await fetch(url);
      const products = await request.json();

      setLoading(false);
      setproducts(products);
      console.log(products);
    } catch (error) {
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="main-build">
              <main>
                <div className="row">
                  <div className="col-12">
                    <div className="app-title text-center mb-4">
                      <h2>Total Of Products: {products.length}</h2>
                    </div>
                  </div>
                  <Products arrayProducts={products} />
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
