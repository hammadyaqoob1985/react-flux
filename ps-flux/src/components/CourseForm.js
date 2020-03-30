import React from "react";
import TextInput from "./common/TextInput";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        value={props.course.title}
        onChange={props.onChange}
        label="Title"
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId || ""}
            onChange={props.onChange}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>

      <TextInput
        id="category"
        name="category"
        value={props.course.category}
        onChange={props.onChange}
        label="Category"
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
