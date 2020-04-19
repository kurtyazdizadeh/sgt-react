import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.postGrade = this.postGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        this.setState({ grades: grades });
      })
      .catch(err => console.error(err));
  }

  postGrade(newGrade) {
    const fetchConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    };

    fetch('/api/grades', fetchConfig)
      .then(res => res.json())
      .then(newGrade => {
        const gradesCopy = [...this.state.grades];
        gradesCopy.push(newGrade);
        this.setState({ grades: gradesCopy });
      })
      .catch(err => console.error(err));
  }

  deleteGrade(gradeId) {
    const { grades } = this.state;

    const gradeIndex = grades.findIndex(grade => grade.id === gradeId);

    const fetchConfig = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };

    fetch(`/api/grades/${gradeId}`, fetchConfig)
      .then(res => res.json())
      .then(data => {
        const updatedGrades = grades.filter((grade, index) => index !== gradeIndex);
        this.setState({ grades: updatedGrades });
      })
      .catch(err => console.error(err));

  }

  getAverageGrade() {
    const { grades } = this.state;
    let average = 0;

    for (let i = 0; i < grades.length; i++) {
      average += grades[i].grade;
    }
    average /= grades.length;

    const result = Math.ceil(average);

    return result || 'N/A';
  }

  render() {
    return (
      <div className="container">
        <Header
          averageGrade={this.getAverageGrade()}
          text="Student Grade Table"
        />
        <div className="row">
          <GradeTable
            grades={this.state.grades}
            onDelete={this.deleteGrade}
          />
          <GradeForm onSubmit={this.postGrade}/>
        </div>
      </div>
    );
  }
}

export default App;
