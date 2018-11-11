import React, { Component } from 'react';

var Enumerable = require('linq');

class TaskInformation extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
            this.props.afterUpdate();
        return true;
    }

    render() {
        const taskList = this.props.listOfTask;
        
        const doneTask = Enumerable.from(taskList).where(function(x) { return x.done == true}).count();
        const totalTask = Enumerable.from(taskList).count();
        return (
            <div>
                <span>Total Tasks: {totalTask}    |   </span>
                <span>Completed Tasks: {doneTask} </span>
            </div>
        );
    }
}
export default TaskInformation;