import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="row align-items-end my-3">
        <h1 className="col-7">
          {this.props.text}
        </h1>
        <h4 className="col text-right">
          Average Score&nbsp;
          <span className="badge badge-secondary">
            {this.props.averageGrade}
          </span>
        </h4>
      </header>
    );
  }
}

export default Header;
