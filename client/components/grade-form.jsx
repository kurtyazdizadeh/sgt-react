import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(event) {
    const change = {};
    switch (event.target.id) {
      case 'name':
        change.name = event.target.value;
        break;
      case 'course':
        change.course = event.target.value;
        break;
      case 'grade':
        change.grade = event.target.value;
        break;
      default:
        break;
    }
    this.setState(change);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, course, grade } = this.state;

    const newGrade = {
      name: name,
      course: course,
      grade: grade
    };

    this.props.onSubmit(newGrade);
    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    const labelClasses = 'col-form-label col-2 card align-items-center bg-light';
    const inputClasses = 'form-control col-10';
    const formRowClasses = 'form-group row';
    return (
      <form
        className="col-12 col-lg-3 px-0"
        onSubmit={this.handleSubmit}
      >
        <h4 className="form-title">Add Grade</h4>
        <div className={formRowClasses}>
          <label htmlFor="name" className={labelClasses}>
            <i className="fas fa-user"></i>
          </label>
          <input
            type="text"
            className={inputClasses}
            id="name"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className={formRowClasses}>
          <label htmlFor="course" className={labelClasses}>
            <i className="far fa-list-alt"></i>
          </label>
          <input
            type="text"
            className={inputClasses}
            id="course"
            name="course"
            placeholder="Course"
            value={this.state.course}
            onChange={this.handleChange}
          />
        </div>
        <div className={formRowClasses}>
          <label htmlFor="grade" className={labelClasses}>
            <i className="fas fa-graduation-cap"></i>
          </label>
          <input
            type="text"
            className={inputClasses}
            id="grade"
            name="grade"
            placeholder="Grade"
            value={this.state.grade}
            onChange={this.handleChange}
          />
        </div>
        <div className={formRowClasses}>
          <button
            className="btn btn-success mx-2"
            type="submit"
          >
              Add
          </button>
          <button
            className="btn btn-secondary"
            type="reset"
            onClick={this.resetForm}
          >
              Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
