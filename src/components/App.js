import React from 'react';
import TaskList from './TaskList';
import TaskListStyle from './TaskList.css'



class App extends React.Component {

    state = {
        task: '',
        list: [],
        counter: 0
    };

    onChange = (event) => {
        this.setState({task: event.target.value});
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            task: '',
            list: [...this.state.list, this.state.task],
            counter: this.state.counter + 1
        });
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

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.onDelete}>Remove task</button>
                    <button onClick={this.onDeleteAll}>Clear</button>
                </div>
                <div>
                    <form className="form" onSubmit={this.onSubmit}>
                        <input value={this.state.task} onChange={this.onChange} />
                        <button>Add new task</button>
                    </form>
                    {    console.log(this.state.list)
                    }
                </div>
                <TaskList list={this.state.list}/>
            </div>
        )
    }
}

export default App;
