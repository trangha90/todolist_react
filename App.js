import React, { Component, Fragment, PureComponent } from 'react';
import InputTask from './Component/input.js';
import TaskList from './Component/list.js';
import TasksInfomation from './Component/information.js'
class App extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            updateState: false,
            taskList: []
          };

        this.handleSubmittedTask = this.handleSubmittedTask.bind(this);
        this.setUpdateInformation = this.setUpdateInformation.bind(this); 
        this.afterUpdateInformation = this.afterUpdateInformation.bind(this);
    }

    setUpdateInformation() {
        this.setState(state => ({updateState : true}));
    }

    afterUpdateInformation() {
        if (this.state.updateState)
        {
            this.setState(state => ({updateState : false}));
        }
    }

    handleSubmittedTask(inputTask) {
        const task = { done: false, text: inputTask};
        this.setState(({taskList}) => ({
            taskList: [
            ...taskList, task
            ]
        }));
    }

   render() {
       const tasks = this.state.taskList;
       const state = this.state.updateState;
      return (
         <div>
            <h2> TODO - LIST </h2>
            <TasksInfomation listOfTask={tasks} status={state} afterUpdate= {this.afterUpdateInformation}/>
            <InputTask 
                onSubmitTask={this.handleSubmittedTask} />
            <TaskList listOfTask={tasks} updateState = {this.setUpdateInformation}/>
         </div>
      );
   }
}
export default App;