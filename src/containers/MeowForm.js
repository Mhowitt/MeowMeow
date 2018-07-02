import React, { Component } from 'react';

class MeowForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meow:""
    };
  }
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="meow">Example textarea</label>
            <textarea className="form-control" id="meow" name="meow" value={this.state.meow} onChange={this.handleChange} rows="3"></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default MeowForm;