import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

function RequestStock(){
  const [orderValue, setOrderValue] = useState('');
  const [productValue, setProductValue] = useState('');
  const [descrValue, setDescrValue] = useState('');
  const [quantityValue, setQuantityValue] = useState('');

  function handleOrderChange(event) {
    setOrderValue(event.target.value);
  }
  function handleProductChange(event) {
    setProductValue(event.target.value);
  }

  function handleDescrChange(event) {
    setDescrValue(event.target.value);
  }
  function handleQuantityChange(event) {
    setQuantityValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted value:', orderValue, productValue, descrValue, quantityValue);
  }

  return (
    <form style={{width:'100%', height:'100%'}} onSubmit={handleSubmit}>
 <div className="field">
                        <label htmlFor="name1">Request No.</label>
                        <InputText id="name1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="requestDate">Request Date:</label>
                        <InputText id="request" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="requested">Requested by:</label>
                        <InputText id="person" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="deliveryDate">Needed on:</label>
                        <InputText id="deliver" type="text" />
                    </div>
      <table>
        <thead>
          <tr>
            <th>Order No.</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td><input type="text" value={orderValue} onChange={handleOrderChange} /></td>
            <td><input type="text" value={productValue} onChange={handleProductChange} /></td>
            <td><input type="text" value={descrValue} onChange={handleDescrChange} /></td>
            <td><input type="text" value={quantityValue} onChange={handleQuantityChange} /></td>
          </tr>
        </tbody>
      </table>
    </form>
  );

};
export default RequestStock;