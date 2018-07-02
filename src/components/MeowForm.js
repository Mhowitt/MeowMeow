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
            <label htmlFor="meow">Compose A New Meow!</label>
            <textarea className="form-control" id="meow" name="meow" value={this.state.meow} onChange={this.handleChange} rows="3" placeholder="What's happening in that catnip crazed brain?"></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default MeowForm;