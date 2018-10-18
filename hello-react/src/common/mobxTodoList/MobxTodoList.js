import React from 'react';
import { observable, autorun, computed } from 'mobx';
import { observer } from 'mobx-react';

class ObservableTodoStore{
	@observable todos =[];
	@observable pendingRequests = 0;
	constructor() {
		autorun (() => {
			console.log(this.report);
		})
	}
	@computed get report() {
		if (this.todos.length === 0)
			return "没有任务";
			return `下一个任务: "${this.todos[0].task}". ` +
			`进度: ${this.completedTodosCount}/${this.todos.length}`;
		}
		addTodo(task) {
			setTimeout(()=>{
				this.todos.push({
				task: task,
				completed: false,
				assignee: null
				});
			},1000)
 
    }
}

export default class MobxTodoList extends React.Component {

	constructor(props) {
		super(props);
	}
	onNewTodo = () => {
		this.props.store.addTodo(prompt('输入一个新的store:','wjl'));
	}

	render() {
		const store = this.props.store;
		return (
			<div>
				{store.report}
				<ul>
					{
						store.todos.map((todo,idx)=><TodoView todo={todo} key={idx} />)
					}
					{ store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
						<button onClick={ this.onNewTodo }>New Todo</button>
						<small> (double-click a todo to edit)</small>
					{/* <RenderCounter />*/}
				</ul>
			</div>
		);
	}
}

class TodoView extends React.Component {
    render() {
        const todo = this.props.todo;
        return (
            <li onDoubleClick={ this.onRename }>
                <input
                    type='checkbox'
                    checked={ todo.completed }
                    onChange={ this.onToggleCompleted }
                />
                { todo.task }
                { todo.assignee
                    ? <small>{ todo.assignee.name }</small>
                    : null
                }
                {/*<RenderCounter />*/}
            </li>
        );
    }
 
    onToggleCompleted = () => {
        const todo = this.props.todo;
        todo.completed = !todo.completed;
    }
 
    onRename = () => {
        const todo = this.props.todo;
        todo.task = prompt('Task name', todo.task) || todo.task;
    }
}
