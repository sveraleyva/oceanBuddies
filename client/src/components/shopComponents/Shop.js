import { useQuery } from "@apollo/client";
import classes from "./Shop.module.css";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Shop = () => {
  const uuid = uuidv4();

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const products = data?.products || [];

  const [cartProducts, setCartProducts] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <div className={classes.backdrop}>
          <div className={classes.modal}>
            <h1 className="text-3xl text-center text-blue-700 my-3 font-bold">Your Cart</h1>
            {cartProducts.map((item, index) => (
              <div className="flex flex-wrap justify-between my-3">
                <div>
                  <h1 className="font-bold text-lg">{item.title}</h1>
                  <div>${item.price}</div>
                  <button
                    className="text-white bg-red-400 hover:bg-red-500 font-light rounded-lg text-sm px-2 py-1.5 text-center mt-1"
                    onClick={() => {
                      setCartProducts(cartProducts.filter((item) => item.id !== cartProducts[index].id));
                    }}
                  >
                    Remove
                  </button>
                </div>
                <img style={{ height: "200px", width: "200px" }} src={item.image} alt="product image" />
              </div>
            ))}
            <div className="flex justify-between mt-3 items-center">
              <div>
                <h2 className="font-bold text-lg">Total</h2>
                <h1>
                  $
                  {cartProducts.reduce((currNumber, item) => {
                    return currNumber + item.price;
                  }, 0)}
                </h1>
              </div>
              <div>
                <button className="text-white bg-gray-400 hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2" onClick={() => setIsModalOpen(false)}>
                  Go Back
                </button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="pt-40 pb-5 bg-blue-700 text-center flex justify-between">
        <h1 className="italic text-white text-xl ml-5">All proceeds will be donated to the supporting charities.</h1>
        <button className="flex items-center mr-5" onClick={() => setIsModalOpen(true)}>
          <svg style={{ width: "40px", height: "40px", color: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <span className={classes.badge}>
            {cartProducts.reduce((currNumber, item) => {
              return currNumber + item.amount;
            }, 0)}
          </span>
        </button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <section className="mb-40 flex flex-wrap justify-around mx-10 m-5">
          {products.map((item) => (
            <div key={item._id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-5">
              <img className="p-8 rounded-t-lg" src={item.imageURL} alt="product image" />
              <div className="px-5 pb-5">
                <h5 className="text-xl tracking-tight text-gray-900 font-light">{item.description}</h5>
                <div className="flex items-center mt-2.5 mb-5"></div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900">${item.price}</span>
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={() => {
                      setCartProducts([...cartProducts, { id: uuid, title: item.title, image: item.imageURL, price: item.price, amount: 1 }]);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default Shop;
