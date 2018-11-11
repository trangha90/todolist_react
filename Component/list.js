import React, { Component } from 'react';
class TaskList extends Component {
    
    constructor(props) {
        super(props);
    }

    onChangeCheckedTask(item, event) {
        item.done = event.target.checked;
        this.props.updateState();
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.props.listOfTask.map(item => {
                        return(
                            <div>
                                <input type="checkbox" onChange={this.onChangeCheckedTask.bind(this, item)}></input>
                                {item.text}
                            </div>
                        );})
                    }
                </div>
            </div>
        );
    }
}
export default TaskList;