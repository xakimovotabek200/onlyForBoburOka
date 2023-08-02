import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { paginationItems } from "../../../constants";

const items = paginationItems;

const Pagination = ({ itemsPerPage }) => {
  const [fetchPaginations, setFetchPaginations] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);
  useEffect(() => {
    fetch("http://komiljonovdev.uz/Bobur/legendApi/api/getProduct")
      .then((res) => res.json())
      .then((res) => {
        setFetchPaginations(res.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    setItemStart(newOffset);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        {Array.isArray(fetchPaginations)
          ? fetchPaginations.map((fetchItem, index) => {
              return (
                <>
                  <div style={{ width: "100%" }} key={fetchItem.id}>
                    <Product
                      img={
                        `http://komiljonovdev.uz/Bobur/legendApi/public/storage/images/` +
                        fetchItem.image
                      }
                      productName={fetchItem.name}
                      price={fetchItem.cost}
                      des={fetchItem.description}
                    />
                  </div>
                </>
              );
            })
          : null}
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <p className="text-base font-normal text-lightText">
          Mahsulot from {itemStart === 0 ? 1 : itemStart} to {endOffset} of{" "}
          {items.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
