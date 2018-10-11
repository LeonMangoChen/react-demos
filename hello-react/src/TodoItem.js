import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		// 当组件的state或者props发生改变的时候，render函数就会重新执行
		this.handleDelete = this.handleDelete.bind(this);
	}

	// 子组件如果想和父组件通信，子组件要调用父组件传递过来的方法

	handleDelete() {
		const { deleteItem, index } = this.props;
		deleteItem(index);
	}

	// 当组件更新重新渲染时，阻止子组件render重新渲染，提升性能
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.content !== this.props.content) {
			return true;
		}
		return false;
	}

	render() {
		const { content } = this.props;
		return (
			<li onClick={this.handleDelete}>
				{content}
			</li>
		)
	}
}

// 校验数据类型
TodoItem.propTypes = {
	content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	deleteItem: PropTypes.func,
	index: PropTypes.number
}

// 变量默认值
TodoItem.defaultProps = {

}

export default TodoItem;