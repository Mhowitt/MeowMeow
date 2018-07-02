import React, { Component } from 'react';
import Meow from './Meow'

class MeowList extends Component {
  // constructor(props) {
  //   super(props);
  componentDidMount() {
    this.props
      .getMeows()
      .then(() => {})
      .catch(() => {
        return;
      });
  }
  render() {
    let meows = this.props.meows.map(meow => <Meow meow={meow}/>)
    return (
      <div className="list-group">
        {meows}
      </div>
    );
  }
}

export default MeowList;