import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="row align-items-end my-4">
        <h1 className="title col-12 col-lg-8 p-0">
          {this.props.text}
        </h1>
        <h4 className="average-grade col-12 col-lg-4 p-0">
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
