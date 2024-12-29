export const SortingProducts = (data, sortValue) => {
    if (!Array.isArray(data)) return data;
  
    switch (sortValue) {
      case "priceLowHigh":
        return [...data].sort((a, b) => a.price - b.price);
      case "priceHighLow":
        return [...data].sort((a, b) => b.price - a.price);
      case "ratingLowHigh":
        return [...data].sort((a, b) => a.rating.rate - b.rating.rate);
      case "ratingHighLow":
        return [...data].sort((a, b) => b.rating.rate - a.rating.rate);
      default:
        return data;
    }
  };
  
  export default SortingProducts