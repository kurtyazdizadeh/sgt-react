import React from 'react';

class GradeTable extends React.Component {
  constructor(props) {
    super(props);
  }

  renderGrades() {
    console.log(this.props.grades);
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
          {this.renderGrades()}
        </thead>
      </table>
    );
  }
}

export default GradeTable;
