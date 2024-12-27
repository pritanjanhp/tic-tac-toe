import React from 'react';

const ProductRow = ({ pdt }) => {
  return (
    <tr>
      <td>{pdt.name}</td>
      <td>{pdt.price}</td>
    </tr>
  );
};

export default ProductRow;
