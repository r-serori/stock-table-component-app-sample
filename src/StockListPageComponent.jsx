import React, { useState } from "react";
import TableComponent from "./TableComponent";
import AddNewItemButton from "./AddNewItemButton";
import SearchBar from "./SearchBar";

const StockListPageComponent = () => {
  const [items, setItems] = useState([
    { name: "商品A", price: 1000, inStock: true },
    { name: "商品B", price: 1500, inStock: false },
    { name: "商品C", price: 2000, inStock: true },
  ]);

  const handleAddNewItem = () => {
    const newItem = { name: "新しい商品", price: 1200, inStock: true };
    setItems([...items, newItem]);
  };

  // SearchBarの「検索」ボタンクリック時に呼び出される。
  const handleSearch = (searchTerm) => {
    alert(`「${searchTerm}」で検索されました。`);
    // 実際の検索ロジックはここに追加されます
  };

  return (
    <div>
      // ここで、handleSearch()をonSearchというPropsに渡す。
      <SearchBar onSearch={handleSearch} />
      <AddNewItemButton onAdd={handleAddNewItem} />
      <TableComponent data={items} />
    </div>
  );
};

export default StockListPageComponent;
