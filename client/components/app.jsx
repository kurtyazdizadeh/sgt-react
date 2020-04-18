import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        this.setState({ grades: grades });
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

    return Math.ceil(average).toString();
  }

  render() {
    return (
      <div className="container">
        <Header
          averageGrade={this.getAverageGrade()}
          text="Student Grade Table"
        />
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
