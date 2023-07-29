import React, { useEffect, useState } from "react";
import localStorage from "redux-persist/es/storage";
import { useForm } from "./useFrom";
import localStorageApi from "redux-persist/es/storage";

const objectApp = {
  name: "",
  phone: "",
  location: "",
  product: "",
};
function Mycomponent() {
  const [value, pocketInfo] = useForm(objectApp);
  const [items, setItems] = useState([]);
  const [itemss, setItemss] = useState([]);
  useEffect(() => {
    if (items) {
      setItems(items);
    }
  }, []);
  useEffect(() => {
    if (itemss) {
      setItemss(itemss);
    }
  }, []);

  const HandelArea = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
  }, [value.name]);

  const addApplication = async () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify(value);

    let response = await fetch(
      "https://komiljonovdev.uz/Bobur/legendApi/api/addApplication",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    );

    let data = await response.json();

  };
  return (
    <form onSubmit={HandelArea} className="my-3">
      <input
        className="w-full py-1 my-3 border-b-2 px-2 text-base  font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
        type="text"
        placeholder="Ismingiz"
        onChange={pocketInfo}
        name="name"
        value={value.name}
        required
      />
      <br />
      <input
        className="w-full py-1 my-3 border-b-2 px-2 text-base  font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
        type="text"
        placeholder="Manzil"
        onChange={pocketInfo}
        name="location"
        value={value.location}
        required
      />
      <br />
      <input
        className="w-full py-1 my-3 border-b-2 px-2 text-base  font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
        type="phone"
        placeholder="Telefon raqam"
        onChange={pocketInfo}
        name="phone"
        value={value.phone}
        required
      />
      <br />
      <input
        className="w-full py-1 my-3 border-b-2 px-2 text-base  font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
        type="text"
        placeholder="Mahsulot"
        onChange={pocketInfo}
        name="product"
        defaultValue={localStorage.getItem("helloData")}
        required
      />
      <br />
      <input
        className="w-full py-1 my-3 border-b-2 px-2 text-base  font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor"
        type="text"
        placeholder="Mahsulot"
        onChange={pocketInfo}
        name="product"
        defaultValue={localStorage.getItem("salom")}
        required
      />
      <br />
      <button
        onClick={addApplication}
        className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300 my-3"
        type="submit"
      >
        Arizani jonatish
      </button>
    </form>
  );
}

export default Mycomponent;
