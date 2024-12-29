import { React, useEffect, useState } from "react";
import ProductHeader from "./ProductHeader.jsx";
import ProductCard from "./ProductCard.jsx";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [filteredValue, setFilteredValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const filter = filteredValue ? `/category/${filteredValue}` : "";
      const response = await fetch(
        `https://fakestoreapi.com/products/${filter}`
      );
      const data = await response.json();

      setData(data);
    };
    fetchData();
  }, [filteredValue]);

  console.log(data);

  // sorting useEffect
  useEffect(() => {
    switch (sortValue) {
      case "priceLowHigh":
        setData((prevData) => [...prevData].sort((a, b) => a.price - b.price));
        break;
      case "priceHighLow":
        setData((prevData) => [...prevData].sort((a, b) => b.price - a.price));
        break;
        case "ratingLowHigh":
        setData((prevData) => [...prevData].sort((a, b) => a.rating.rate - b.rating.rate));
        break;
      case "ratingHighLow":
        setData((prevData) => [...prevData].sort((a, b) => b.rating.rate - a.rating.rate));
        break;
      default:
        console.log("error")

 
    }
  }, [sortValue]);
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 container m-auto">
      <ProductHeader
        setFilteredValue={setFilteredValue}
        setSortValue={setSortValue}
      />
      <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        {Array.isArray(data) &&
          data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default AllProducts;