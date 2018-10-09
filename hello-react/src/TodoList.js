import React, { Component, Fragment} from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  // 父组件通过属性的形式向子组件传递参数
  // 子组件通过props接收父组件传递过来的参数

  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({list});
  }

  getTodoItems() {
    return(
      this.state.list.map((item, index) => {
        // return <li key={index} onClick={this.handItemClick.bind(this, index)}>{item}</li>
        return (
          <TodoItem 
          deleteItem={this.handleDelete} 
          key={index} 
          content={item} 
          index={index}
          />
        )
      })
    )
  }

  render() {
    return (
      <Fragment>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    );
  }
}

export default TodoList;
