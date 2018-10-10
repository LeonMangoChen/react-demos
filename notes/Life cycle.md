## life cycle
定义：生命周期函数是指在某一时刻组件会自动调用执行的函数

**componentWillMoun**t:在组件即将被挂载到页面的时刻自动执行

**componentDidMount**:在组件被挂载到页面之后，会自动执行

**shouldComponentUpdate**:组件在更新之前，会被自动执行，要求返回一个boolean类型的返回结果来决定组件是否要被更新

**componentWillUpdate**：组件在更新之前，会自动执行，但是它在shouldComponentUpdate之后被执行，如果shouldComponentUpdate返回true，它才执行。如果返货false，这个函数就不会被执行

**componentDidUpdate**：组件在更新之后，会自动执行

**componentWillReceiveProps**：1.一个组件要从父组件接收参数；2.只要父组件的render函数重新被执行了，子组件的这个生命周期函数就会被执行

**commentWillUnmount**:当组件即将被从页面剔除的时候，才会被执行