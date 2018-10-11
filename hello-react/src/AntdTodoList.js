import React, { Component,Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'

class AntdTodoList extends Component {

	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		// this.handleDeletItem = this.handleDeletItem.bind(this);
		store.subscribe(this.handleStoreChange);
	}

	render() {
		return (
			<Fragment>
				<div style={{margin:'10px'}}>
					<Input
						onChange={this.handleInputChange}
						value={this.state.inputValue}
						placeholder="todo info"
						style={{width: '300px', marginRight: '10px'}}
					/>
					<Button onClick={this.handleBtnClick} type="primary">提交</Button>
				</div>
				<List
					style={{width: '300px', margin: '10px'}}
			    bordered
			    dataSource={this.state.list}
			    renderItem={(item ,index)=> (<List.Item onClick={this.handleDeletItem.bind(this, index)}>{item}</List.Item>)}
			  />
			</Fragment>
		)
	}

	handleInputChange(e) {
		const action = {
			type: 'change_input_value',
			value: e.target.value
		}
		store.dispatch(action);
	}

	handleStoreChange() {
		this.setState(store.getState());
	}

	handleBtnClick() {
		const action = {
			type: 'add_item'
		}
		store.dispatch(action);
	}

	handleDeletItem(index) {
		const action = {
			type: 'delete_item',
			index: index
		}
		store.dispatch(action);
	}

}

export default AntdTodoList;