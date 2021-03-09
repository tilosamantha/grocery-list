import React from 'react';


function ItemForm({handleSubmit, handleChange, name, quantity}) {

    return (
      <form onSubmit={handleSubmit}>
        <h2 className='form-header'>Oop! Forgot one!</h2>
        <div className='form-container'>
          <label className='label'>
            Quantity:  
            <input 
              className='form-input'
              type="text" 
              name="quantity" 
              size="7"
              onChange={handleChange}
              value={quantity}
            />
          </label>
          <label className='label'>
            Item:  
            <input 
              className='form-input'
              type="text" 
              name="name" 
              onChange={handleChange}
              value={name}
            />
          </label>
        </div>

        <br />

        <input type="Submit" value="submit" className="submit-btn" onChange={handleSubmit}>
        </input>
      </form>
    )
}

export default ItemForm;