import React, { Component, Fragment} from 'react';
// import TodoList from './TodoList';
import AntdTodoList from './AntdTodoList';
import TabBarMoudle from './common/tabBar/TabBar.js'

class App extends Component {

	render(){
		return (
			<Fragment>
				{/*<AntdTodoList />*/}
				<TabBarMoudle />
			</Fragment>
		)
	}

}

export default App;