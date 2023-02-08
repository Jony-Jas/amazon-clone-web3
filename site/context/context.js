import { useContext, createContext, useState, useEffect, useRef } from "react";
import { createContract } from "../utils/constant";
import { useAccount } from "wagmi";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [useraddress, setAddress] = useState();
  const [contract, setContract] = useState(null);
  const [products, setProducts] = useState([]);
  const { address } = useAccount();

  useEffect(() => {
    const newContract = createContract();
    setContract(newContract);
    setAddress(address);
  }, [address]);

  useEffect(() => {
    getItems();
  }, [contract]);

  const getItems = async () => {
    if (contract == null) return;
    const count = await contract.methods.getProductCount().call();
    let product = [];
    for (let i = 0; i < count; i++) {
      const newproduct = await contract.methods.products(i).call();
      const productDetail = {
        id: i,
        name: newproduct.name,
        price: newproduct.price,
        description: newproduct.description,
        rating: newproduct.rating,
        img: newproduct.img,
        seller: newproduct.seller,
        purchaseCount: newproduct.purchaseCount,
      };
      console.log("products", products);
      product.push(productDetail);
    }
    setProducts(product);
  };

  const buyItem = async (id) => {
    try {
      await contract.methods.purchaseProduct(id).send({
        from: useraddress,
        value: products[id].price,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <AppContext.Provider value={{ useraddress, products, buyItem }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
