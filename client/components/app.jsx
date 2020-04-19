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

  getAverageGrade() {
    const { grades } = this.state;
    let average = 0;

    for (let i = 0; i < grades.length; i++) {
      average += parseFloat(grades[i].grade);
    }
    average /= grades.length;

    return Math.ceil(average).toString();
  }

  render() {
    return (
      <div className="container">
        <Header
          averageGrade={this.getAverageGrade()}
          text="Student Grade Table"
        />
        <div className="row">
          <GradeTable grades={this.state.grades}/>
          <GradeForm onSubmit={this.postGrade}/>
        </div>
      </div>
    );
  }
}

export default App;
