import React from "react";

const TableComponent = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>商品名</th>
          <th>価格</th>
          <th>在庫状況</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.inStock ? "在庫あり" : "在庫なし"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
