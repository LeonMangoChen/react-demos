import React, { Component, Fragment} from 'react';
import TodoList from './TodoList';
import AntdTodoList from './AntdTodoList';

class App extends Component {

	render(){
		return (
			<Fragment>
				<AntdTodoList />
			</Fragment>
		)
	}

}

export default App;