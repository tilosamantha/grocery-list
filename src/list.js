import React from 'react';
import Item from './item';
import './App.css';


const List = ({ items, removeItem, editItem}) => (
  <section>
  <header>
    <h2 className='header'>Shopping List</h2>
    <section className='row'>
      <section className='cell'>Done?</section>
      <section className='cell'>Quantity</section>
      <section className='cell'>Item</section>
    </section>
  </header>

  <section>
    {items.map((item) => (
      <Item key={item.id} {...item} removeItem={removeItem} editItem={editItem}/>
    ))}
  </section>
</section>
)

export default List;
