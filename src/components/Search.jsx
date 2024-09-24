// import React, { useEffect, useState } from "react";
// import '../index.css';
// import ProductsPage from "./ProductsPage";

// {/* <div className="search-container">
// <input 
//     type="search" 
//     name="search" 
//     id="search" 
//     onChange={(e) => setSearchQuery(e.target.value)}
//     placeholder="Search"/>
// </div> */}


// function Search() {
//   const [data, setData] = useState([]);
//   const [query, setQuery] = useState("");
//   const search_parameters = Object.keys(Object.assign({}, ...data));

//   function search(data) {
//     return data.filter((data) =>
//       search_parameters.some((parameter) =>
//         data[parameter].toString().toLowerCase().includes(query)
//       )
//     );
//   }
//   return (
//     <div>
//       <div className="search-container">
//         <input
//           type="search"
//           name="search"
//           id="search"
//           className="search"
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search"
//         />
//       </div>
// {/* 
//       <center>
//         {search(data).map((dataObj) => {
//           return (
//             <ProductsPage dataObj={item}/>
//           );
//         })}
//       </center> */}

//     </div>
//   );
// }

// export default Search;


import React, { useState } from "react";

const Search = ({
  products,
  setDisplayedProducts,
  displayProducts,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("price-asc");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredProducts = products.filter((product) => {
      return (
        product.title
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) &&
        (selectedCategory === "all" || product.category === selectedCategory)
      );
    });
    setDisplayedProducts(filteredProducts);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    if (event.target.value === "all") {
      setDisplayedProducts(products);
    } else {
      const filteredProducts = products.filter((product) => {
        return (
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (event.target.value === "all" ||
            product.category === event.target.value)
        );
      });
      setDisplayedProducts(filteredProducts);
    }
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
    const [sortBy, sortOrder] = event.target.value.split("-");
    const sortedProducts = [...displayProducts].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] - b[sortBy];
      } else {
        return b[sortBy] - a[sortBy];
      }
    });
    setDisplayedProducts(sortedProducts);
  };

  return (
    <section className="py-4 px-4 lg:px-16">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/4 mb-4 lg:mb-0 lg:mr-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-4 py-2 lg:w-auto"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="w-full flex flex-col lg:flex-row">
          <div className="lg:w-auto">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="border border-gray-300 rounded-md px-4 py-2 mb-4 lg:mb-0 lg:mr-4 w-full lg:w-auto"
            >
              <option value="all">All Categories</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="jewelery">Jewelry</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>

          <div className="lg:w-auto">
            <select
              value={selectedSort}
              onChange={handleSortChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full lg:w-auto"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
