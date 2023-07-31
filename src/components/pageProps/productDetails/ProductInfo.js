import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  // console.log(productInfo);
  return (
<>
    <div key={productInfo.id} className="flex flex-col gap-5">
    <h2 className="text-4xl font-semibold">{productInfo.productName ? productInfo.productName : productInfo.name}</h2>
    <p className="text-xl font-semibold">{productInfo.price ? productInfo.price : productInfo.cost}</p>
    <p className="text-base text-gray-600">{productInfo.des ? productInfo.des : productInfo.description}</p>
    <p className="text-sm">Birinchi bo'lib sharh qoldiring</p>
    <button
      onClick={() =>
        dispatch(
          addToCart({
            _id: productInfo.id,
            name: productInfo.productName,
            quantity: null,
            image:productInfo.img,
            badge: productInfo.badge,
            price: productInfo.price,
          })
        )
      }
      className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
    >
      Savatga qo'shish
    </button>
  </div>
  </>
  );
};

export default ProductInfo;