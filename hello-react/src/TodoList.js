import React, { Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue: '',
      show: true
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleBtnClick() {
    // React16 写法
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      // 因为setState函数是异步执行，如果需要操作state变化后的数据，要写入setState的第二个参数的回调函数中
      console.log(this.ul.querySelectorAll('li').length);
    });
    // React 16 前写法
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }))
    // this.setState({
    //   inputValue:e.target.value
    // });
  }

  // 父组件通过属性的形式向子组件传递参数
  // 子组件通过props接收父组件传递过来的参数

  handleDelete(index) {
    // const list = [...this.state.list];
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index,1);
      return {list}
    });
    // this.setState({list});
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

  handleToggle(){
    this.setState({
      show: this.state.show ? false : true
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insrtArae">输入内容</label>
          <input 
            id="insrtArae"
            type="text" 
            value={this.state.inputValue} 
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        {/*ref是获取dom，一般情况下尽量不要使用*/}
        <ul ref={(ul) => {this.ul = ul}}>{this.getTodoItems()}</ul>

        {/* <SimpleTodoLis /> */}

        <div className={this.state.show? 'show' : 'hide'}>hello</div>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    );
  }

  componentDidMount() {
    axios.get('/api/todolist')
      .then((res)=>{
        console.log(res.data);
        this.setState(() => ({
          list: [...res.data]
        }));
      })
      .catch(()=>{console.log('error')})
  }
}

export default TodoList;
