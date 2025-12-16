import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { cartContent } from "../../context/MainContext";
import { FaStar, FaFilter } from "react-icons/fa";

export default function Home() {
  let [category, setCategory] = useState([]);
  let [product, setProduct] = useState([]);
  let [loading, setLoading] = useState(true);

  const apiUrl = import.meta.env.VITE_API_URL

  //Filter 
  let [sorting, setSorting] = useState(null);
  let [categoryFilter, setCategoryFilter] = useState([]);

  let getCategory = () => {
    axios
      .get(`${apiUrl}/categories.php`)
      .then((res) => res.data)
      .then((finalRes) => {
        setCategory(finalRes.data);
      });
  };

  let getProducts = () => {
    setLoading(true); // Start loading
    axios
      .get(`${apiUrl}/products.php`, {
        params: {
          sorting,
          categories: categoryFilter.join(","),
        },
      })
      .then((res) => res.data)
      .then((finalRes) => {
        setProduct(finalRes.data);
        setLoading(false); // Stop loading
      });
  };

  let getCategoryValue = (e) => {
    if (e.target.checked) {
      if (!categoryFilter.includes(e.target.value)) {
        setCategoryFilter([...categoryFilter, e.target.value]);
      }
    } else {
      let filterData = categoryFilter.filter((v) => v !== e.target.value);
      setCategoryFilter(filterData);
    }
  };

  useEffect(() => {
    getProducts();
  }, [sorting, categoryFilter]);

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <section className="py-10 px-4">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[20%_auto] gap-8">

        {/* Sidebar / Filters */}
        <aside className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm h-fit border border-gray-200 dark:border-gray-800">
          <h2 className="font-bold text-xl mb-4 flex items-center gap-2 border-b pb-2 dark:border-gray-700">
            <FaFilter className="text-indigo-500" /> Filters
          </h2>

          {/* Sorting */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">Sort By</h4>
            <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
              {[
                { id: 1, label: "Ascending" },
                { id: 2, label: "Descending" },
                { id: 3, label: "Price: Low to High" },
                { id: 4, label: "Price: High to Low" },
                { id: 5, label: "Discount: Low to High" },
                { id: 6, label: "Discount: High to Low" },
                { id: 7, label: "Rating: Low to High" },
                { id: 8, label: "Rating: High to Low" },
              ].map((item) => (
                <div key={item.id} className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer" onClick={() => setSorting(item.id)}>
                  <input id={`sort-${item.id}`} name="sort" type="radio" className="accent-indigo-600 w-4 h-4 cursor-pointer" />
                  <label htmlFor={`sort-${item.id}`} className="ml-3 text-sm cursor-pointer flex-1">{item.label}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">Categories</h4>
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {category.map((obj, index) => {
                return (
                  <div key={index} className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                    <input
                      type="checkbox"
                      value={obj.slug}
                      onChange={getCategoryValue}
                      className="w-4 h-4 rounded border-gray-300 accent-indigo-600 focus:ring-indigo-500"
                    />
                    <label className="ml-3 text-sm cursor-pointer flex-1">
                      {obj.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <article>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {loading ? (
              // Loading Skeleton
              Array(8).fill(0).map((_, i) => (
                <div key={i} className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 animate-pulse">
                  <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-md mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              ))
            ) : (
              product.map((obj, index) => <ProductCard key={index} data={obj} />)
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

function ProductCard({ data }) {
  let { addToCart } = useContext(cartContent);
  let { name, image, price, id, rating } = data;

  return (
    <div className="group bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden h-[200px] p-4 flex items-center justify-center bg-white">
        <img
          src={image}
          alt={name}
          className="object-contain h-full w-full group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h5 className="text-gray-500 dark:text-gray-400 text-xs font-bold tracking-wide mb-1 uppercase truncate">
          Category Name
        </h5>
        <h3 className="font-bold text-gray-800 dark:text-white text-lg mb-1 truncate" title={name}>
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center text-yellow-400 text-sm mb-3">
          {[...Array(5)].map((_, i) => <FaStar key={i} className={i < 4 ? "text-yellow-400" : "text-gray-300"} />)}
          <span className="text-gray-400 ml-2 text-xs">(4.0)</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">₹{price}</span>
          <button
            onClick={() => addToCart(data)}
            className="  cursor-pointer  bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}