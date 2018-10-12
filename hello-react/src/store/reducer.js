import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionType';

const defaultState = {
	inputValue: '124',
	list: [1,2,3]
}

// reducer 可以接收state，但是绝不能修改state
export default (state = defaultState, action) => {
	if (action.type === CHANGE_INPUT_VALUE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}
	if (action.type === ADD_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		if (newState.inputValue !== '' ) {
			newState.list.push(newState.inputValue);
			newState.inputValue='';
		}
		return newState;
	}
	if (action.type === DELETE_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1);
		return newState;
	}
	return state;
}