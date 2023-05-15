import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Nav from "./Nav";
import { useState } from "react";

function App() {
  const productData = [
    {
      name: "Fancy Product",
      price: "$40.00 - $80.00",
    },
    {
      name: "Special Item",
      old_price: "$20.00",
      price: "$18.00",
      sale: true,
    },
    {
      name: "Sale Item",
      old_price: "$50.00",
      price: "$25.00",
      sale: true,
    },
    {
      name: "Popular Item",
      price: "$40.00 - $80.00",
    },
    {
      name: "Sale Item",
      old_price: "$50.00",
      price: "$25.00",
      sale: true,
    },
    {
      name: "Fancy Product",
      price: "$120.00 - $280.00",
    },
    {
      name: "Special Item",
      old_price: "$20.00",
      price: "$18.00",
      sale: true,
    },
    {
      name: "Popular Item",
      price: "$40.00",
    },
  ];
  const [count, setcount] = useState(0);

  return (
    <div className="App">
      <Nav cartCount={count} store={setcount}></Nav>
      <Header></Header>
      <div className="Cart-items">
        <section class="py-5">
          <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {productData.map((ele) => (
                <div class="col mb-5">
                  <div class="card h-100">
                    {ele.sale != true ? (
                      ""
                    ) : (
                      <div
                        class="badge bg-dark text-white position-absolute"
                        style={{ top: "0.5rem", right: "1rem" }}
                      >
                        Sale
                      </div>
                    )}
                    <img
                      class="card-img-top"
                      src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                      alt="..."
                    />
                    <div class="card-body p-4">
                      <div class="text-center">
                        <h5 class="fw-bolder">{ele.name}</h5>
                        {ele.sale != true ? (
                          ele.price
                        ) : (
                          <div>
                            <span
                              style={{ textDecorationLine: "line-through" }}
                            >
                              {ele.old_price}
                            </span>
                            <span>{ele.price}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div class="text-center">
                        {ele.sale != true ? (
                          <button class="btn btn-outline-dark mt-auto" href="#">
                            View options
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setcount(count + 1);
                            }}
                            class="btn btn-outline-dark mt-auto"
                          >
                            Add to cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {
                count<=0? <button class="btn btn-outline-dark mt-auto"
                disabled="true"
              >
                Delete Items
              </button>:<button onClick={() => {
                  setcount(count - 1);
                }}
                class="btn btn-outline-dark mt-auto">Delete Items</button>
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
