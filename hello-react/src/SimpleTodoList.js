import React, { Component } from 'react';

class SimpleTodoLis extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue:e.target.value
    });
  }

  handleItemDelete(index){
  	console.log(index);
  }

  render() {
    return (
      <div>
        <div>
          <input 
            value={this.state.inputValue} 
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
			    {
			     	this.state.list.map((item, index) => {
			     		return <li onClick={this.handleItemDelete.bind(this)}>{item}</li>
			     	})
			    }
        </ul>
      </div>
    );
  }
}

export default SimpleTodoLis;
