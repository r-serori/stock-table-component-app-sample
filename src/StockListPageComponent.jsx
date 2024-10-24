import React, { useState } from "react";
import TableComponent from "./TableComponent";
import AddNewItemButton from "./AddNewItemButton";
import SearchBar from "./SearchBar";
import "./styles.css"; // CSSファイルをインポート

const StockListPageComponent = () => {
  const [items, setItems] = useState([
    { name: "商品A", price: 1000, inStock: true },
    { name: "商品B", price: 1500, inStock: false },
    { name: "商品C", price: 2000, inStock: true },
  ]);

  const [filteredItems, setFilteredItems] = useState(items); // フィルタリングされたアイテムを管理。　TableComponentにPropsとして渡す。

  const handleAddNewItem = () => {
    const newItem = { name: "新しい商品", price: 1200, inStock: true };
    setItems([...items, newItem]);
  };

  // SearchBarの「検索」ボタンクリック時に呼び出される。
  const handleSearch = (searchTerm) => {
    const filtered = items.filter(
      (
        item // item.nameにsearchTermの値が含まれていたら、filteredに格納される。
      ) => item.name.includes(searchTerm)
    );
    setFilteredItems(filtered); // フィルタリングされた結果をsetFilteredItemsのuseStateに格納。
    // 実際の検索ロジックはここに追加されます
  };

  return (
    <div className="box-container">
      <div className="top-bar">
        <SearchBar onSearch={handleSearch} />
        <AddNewItemButton onAdd={handleAddNewItem} />
      </div>
      <TableComponent data={filteredItems} />
    </div>
  );
};

export default StockListPageComponent;
