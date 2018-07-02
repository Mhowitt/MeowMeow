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
      <div className="list-group">{meows}
        <div className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <small>Donec id elit non mi porta.</small>
        </div>
        {meows}
      </div>
    );
  }
}

export default MeowList;