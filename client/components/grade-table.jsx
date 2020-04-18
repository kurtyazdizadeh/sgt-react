import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {
  renderGrades() {
    const grades = this.props.grades;

    const gradeElements = grades.map(grade => {
      return <Grade key={grade.id} grade={grade} />;
    });

    return gradeElements;
  }

  render() {
    return (
      <table className="table table-striped mx-auto col-12 col-lg-8">
        <thead>
          <tr className="table-active">
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {this.renderGrades()}
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
