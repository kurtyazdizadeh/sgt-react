import React from 'react';

class GradeForm extends React.Component {
  render() {
    const labelClasses = 'col-form-label col-2 card align-items-center bg-light';
    const inputClasses = 'form-control col-10';
    const formRowClasses = 'form-group row';
    return (
      <form className="col-12 col-lg-3 px-0">
        <h4 className="form-title" id="formTitle">Add Grade</h4>
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
          />
        </div>
        <div className={formRowClasses}>
          <button className="btn btn-success mx-2" type="submit" id="formSubmit">Add</button>
          <button className="btn btn-secondary" type="reset">Cancel</button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
