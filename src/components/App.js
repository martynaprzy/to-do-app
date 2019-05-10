import React from 'react';
import TaskList from './TaskList';
import TaskListStyle from './TaskList.css'
import AppStyle from './App.css'



class App extends React.Component {

    state = {
        task: '',
        list: [],
        counter: 0
    };

    onChange = (event) => {
        if (event.target.value !== '') {
            this.setState({task: event.target.value });
        }
    };

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.task !== '') {
            this.setState({
                task: '',
                list: [...this.state.list, this.state.task],
                counter: this.state.counter + 1
            });
        }
    };

    onDelete = (event) => {
        const newList = this.state.list.pop();
        if (this.state.counter !== 0) {
            this.setState({
                list: this.state.list,
                counter: this.state.counter - 1
            })
        }
    };

    onDeleteAll =(event) => {
        this.setState({
            list: [],
            counter: 0
        })
    };

    onAdd =(event) => {
        const inputArea = document.querySelector('input');
        inputArea.style.display='block';
        console.log(event.target)
    };

    render() {
        return (
            <div className='container'>
                <div className='tasks'>
                    <h2>to do list</h2>
                    <button onClick={this.onDelete}>Remove task</button>
                    <button onClick={this.onDeleteAll}>Clear</button>
                    <form className="form" onSubmit={this.onSubmit}>
                        <button onClick={this.onAdd}>Add new task</button>
                        <input value={this.state.task} onChange={this.onChange} placeholder='Type what you need to do' />
                    </form>
                </div>
                <TaskList list={this.state.list}/>
            </div>
        )
    }
}

export default App;
