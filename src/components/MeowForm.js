import React, { Component } from 'react';

class MeowForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meow:""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('hit submit')
    this.props.addMeows(this.state).then(() =>{})
    .catch(() => {
      return;
    })
  }

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

  render() {
    return (
      <div className="mb-3">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="meow">Compose A New Meow!</label>
            <textarea className="form-control mb-1" id="meow" name="meow" value={this.state.meow} onChange={this.handleChange} rows="3" placeholder="What's happening in that catnip crazed brain?"></textarea>
          <button type="submit" className="btn btn-danger mt-1 my-sm-0">Meow&nbsp; <i class="fas fa-paw"></i></button>
          </div>
        </form>
      </div>
    );
  }
}

export default MeowForm;