import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product"

const products = [
  {id:0, title: 'Халк'},
  {id:1, title: 'Человек-паук'},
  {id:2, title: 'Человек-муравей'},
  {id:3, title: 'Бетмен'},
  {id:4, title: 'Хамза'},
  {id:5, title: 'Колобок'},
]


function App() {
  const [auth, setAuth] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        {auth && <Route path="/page3" element={<Page3 />} />}
        <Route path="*" element={<NotFound />} />
        <Route path='/product/:id' element={<Product products={products} />} />
      </Routes>
      <ul>
        <button onClick={() => setAuth(!auth)}>
          {auth ? "Выйти" : "Авторизоваться"}
        </button>
        <button>
          <Link to="/">Page1</Link>
        </button>
        <button>
          <Link to="/page2">Page2</Link>
        </button>
        <button>
          <Link to="page3">Page3</Link>
        </button>
      </ul>

      {
        products.map(product => <h1>
        <Link to={`/product/${product.id}`}>
        {product.title}
        </Link></h1>)
      }

    </div>
  );
}

export default App;
