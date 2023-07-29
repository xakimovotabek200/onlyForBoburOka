import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://komiljonovdev.uz/Bobur/legendApi/api/getProduct")
      .then((response) => response.json())
      .then((data) => {
        setData(data.products);
      });
  }, []);
  return (
    <div className="flex flex-col gap-5 ">
      <h2 className="text-4xl font-semibold">{productInfo.name}</h2>
      <p className="text-xl font-semibold">${productInfo.cost}</p>
      <p className="text-base text-gray-600">{productInfo.description}</p>
      <p className="text-sm">Birinchi bo'lib sharh qoldiring</p>
      <p className="font-medium text-lg"></p>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo.id,
              name: productInfo.name,
              quantity: 1,
              image:
                `https://komiljonovdev.uz/Bobur/legendApi/public/storage/images/` +
                productInfo.image,
              badge: productInfo.badge,
              price: productInfo.cost,
              colors: productInfo.color,
            })
          )
        }
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Savatga qo'shish
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Turlari:</span> Baxorgi
        Kolleksiyalr turkiyadan kelgan
      </p>
    </div>
  );
};

export default ProductInfo;
