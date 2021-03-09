import React from 'react';
import './App.css';

const Item = ({ id, name, quantity, removeItem, editItem }) => (
  <section className='row-container'>
    <section className='check-cell'>
      <input type="checkbox" className="check12"/>
    </section>
    <section className='cell'>{quantity}</section>
    <section className='name-cell'>{name}</section>
    <section className='btn-cell'>
      <button 
        className="btn-edit" 
        onClick={() => {editItem(id)}}>edit</button>
      <button 
        className="btn-remove" onClick={() => removeItem(id)}>remove</button>
    </section>
  </section>
);

export default Item;