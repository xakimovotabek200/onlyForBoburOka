import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { paginationItems } from "../../../constants";
import Flex from "../../designLayouts/Flex";

// import { Link } from "react-router-dom";

const HeaderBottom = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [show, ref]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };


  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `http://komiljonovdev.uz/Bobur/legendApi/api/search?name=${searchQuery}`
      )
      if (!response.ok) {
      }
      const data = await response.json();
      setFilteredProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  };

  useEffect(() => {

    fetchProducts();

  }, [searchQuery]);

  return (
    <div className="w-full bg-[#F5F5F3] relative">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div
            onClick={() => setShow(!show)}
            ref={ref}
            className="flex h-14 cursor-pointer items-center gap-2 text-primeColor"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5" />
            <p className="text-[14px] font-normal">Categoriya</p>

            {show && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-36 z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6"
              >
                <li>
                  <Link
                    to="futbolka"
                    className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer"
                  >
                    Futbolkalar
                  </Link>
                </li>
                <li className="my-3">
                  <Link
                    to="ryugzak"
                    className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer"
                  >
                    Ryugzaklar
                  </Link>
                </li>
                <li className="my-3">
                  <Link
                    to="formalar"
                    className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer"
                  >
                    Formalar
                  </Link>
                </li>
                <li className="my-3">
                  <Link
                    to="shoes"
                    className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer"
                  >
                    Oyoq kiyimlar
                  </Link>
                </li>
                <li className="my-3">
                  <Link
                    to="sumkalar"
                    className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer"
                  >
                    Sumkalar
                  </Link>
                </li>
              </motion.ul>
            )}
          </div>
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Qidiruv"
            />
            <FaSearch className="w-5 h-5" />
            {searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {filteredProducts &&
                  Array.isArray(filteredProducts) &&
                  filteredProducts.length > 0 ? (
                  filteredProducts.map((item) => (
                    <div
                      key={item.id}
                      onClick={() =>
                        navigate(
                          `/product/${item.name
                            .toLowerCase()
                            .split(" ")
                            .join("")}`,
                          {
                            state: {
                              item: item,
                            },
                          }
                        ) &
                        setShowSearchBar(true) &
                        setSearchQuery("")
                      }
                      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                    >
                      <img
                        className="w-24"
                        src={
                          `https://komiljonovdev.uz/Bobur/legendApi/public/storage/images/` +
                          item.image
                        }
                        alt="productImg"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">{item.name}</p>
                        <p className="text-xs">{item.description}</p>
                        <p className="text-sm">
                          Price:{" "}
                          <span className="text-primeColor font-semibold">
                            {item.cost}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-400">
                    No matching products found.
                  </p>
                )}
              </div>
            )}
          </div>

          <Link to="/cart">
            <div className="relative">
              <FaShoppingCart />
              <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                {products.length > 0 ? products.length : 0}
              </span>
            </div>
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
