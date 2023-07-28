import React, { useState, useEffect } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://komiljonovdev.uz/Bobur/legendApi/api/getProduct")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setData(data.products);
      });
  }, []);
  return (
    <div className="w-full pb-20">
      <Heading heading="Tovarlar" />
      <div
            className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10"
          >
      {data?.map((item) => {
        return (
          <div
            key={item.id}
          >
            <Product
              img={`http://komiljonovdev.uz/Bobur/legendApi/public/storage/images/`+item.image}
              productName={item.name}
              price={item.cost}
              des={item.description}
            />
           
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default BestSellers;
