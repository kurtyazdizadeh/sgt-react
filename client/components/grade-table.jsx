import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {
  constructor(props) {
    super(props);
  }

  renderGrades() {
    const grades = this.props.grades;

    const gradeElements = grades.map(grade => {
      return <Grade key={grade.id} grade={grade} />;
    });

    return gradeElements;
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
