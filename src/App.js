import React from 'react';
import './App.css';
import List from './list';
import ItemForm from './itemForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: 'Peach', quantity: 6 },
        { id: 2, name: 'Romaine Lettuce', quantity: 1 },
        { id: 3, name: 'Chicken Breast', quantity: 3 },
        { id: 4, name: 'Chocolate Chips', quantity: 1 },
        { id: 5, name: 'Eggs', quantity: 1 },
      ],
      name: '',
      quantity: '',
      id: '',
      largestID: 5,
      index: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value
    });
  }; 
  
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.index === '') { 
      this.addItem()
    } else { 
      this.updateItem()
    }
    this.setState({
      name: '',
      quantity: '',
      index: '',
      id: ''
    })
  };
  

  addItem() {
    let newItem = { id: this.state.largestID + 1, name: this.state.name, quantity: this.state.quantity };
    let allItems = this.state.items;
    allItems.push(newItem);
    this.setState({ items: allItems })
    console.log('new ID added: ', newItem.id)
    this.setState({ name: "", quantity: "", largestID: this.state.largestID += 1  })
  }
  

  findIndexById(array, attr, value) {
    for(var i = 0; i < array.length; i+= 1) {
      if(array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  }

  //fills form with item info to edit
  editItem(id) {
    let updateItem = this.state.items.find(item => item.id === id)
    let index = this.findIndexById(this.state.items, 'id', id);

    this.setState({name: updateItem.name, quantity: updateItem.quantity, index: index, id: updateItem.id });

    console.log('index at: ', index, 'id: ', id)
  }


  //ON SUBMIT, updates object item in list
  updateItem() {
    var items = this.state.items;

    items.find( (a, b) => {
      if (b === this.state.index) {
        items[b].name = this.state.name;
        items[b].quantity = this.state.quantity;
      }
    });
    
    this.setState({
      items: items
    })
  }

  removeItem(id) {
    let newItems = this.state.items.filter(item => item.id !== id)
    this.setState({items: newItems})

    console.log(this.state.items)
  }

  render() {
    return (
      <div className='container'>
        <ItemForm 
          className='form-container'
          name={this.state.name}
          quantity={this.state.quantity}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <br />
        <List
          className='list-container'
          items={this.state.items} 
          removeItem={this.removeItem.bind(this)}
          editItem={this.editItem.bind(this)}
        />
      </div>
    )
  };
}

export default App;
