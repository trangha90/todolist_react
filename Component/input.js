import React, {Component} from 'react';
class InputTask extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmittedTask = this.handleSubmittedTask.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmittedTask(event) {
    const newTask = this.state.value;
    this.props.onSubmitTask(newTask);
  }

  render() {
    const newTask = this.props.newTask;
    return (
      <form>
        <label>
          Tasks:
          <input type="text" value={newTask} onChange={this.handleChange} />
        </label>
        <input value="Submit" onClick={this.handleSubmittedTask} />
      </form>
    );
  }
}
export default InputTask;