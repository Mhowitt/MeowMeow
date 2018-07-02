import React from 'react';


const Meow = ({meow}) => {
    return (
      <div className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{meow.user_id}</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1"> {meow.text} </p>
    </div>
    );
}

export default Meow;