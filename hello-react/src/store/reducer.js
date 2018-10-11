const defaultState = {
	inputValue: '124',
	list: [1,2,3]
}

// reducer 可以接收state，但是绝不能修改state
export default (state = defaultState, action) => {
	if (action.type === 'change_input_value') {
		const newState = state;
		newState.inputValue = action.value;
		return newState;
	}
	if (action.type === 'add_item') {
		const newState = state;
		if (newState.inputValue !='' ) {
			newState.list.push(newState.inputValue);
			newState.inputValue='';
		}
		return newState;
	}
	if (action.type === 'delete_item') {
		const newState = state;
		newState.list.splice(action.index,1);
		return newState;
	}
	return state;
}