import React from "react";
import { useHistory } from "react-router-dom";

export default function Classform(props) {
  const { values, update, submit } = props;
  const history = useHistory();

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
    history.push("/browse");
  };

  return (
    <form className="class-form-container" onSubmit={onSubmit}>
      <label>
        Class Name:
        <input
          name="name"
          type="text"
          placeholder="Class Name..."
          maxLength="50"
          value={values.name}
          onChange={onChange}
        />
      </label>
      <br />
      <label>
        Type of Class:
        <input
          name="type"
          type="text"
          placeholder="Type of Class..."
          maxLength="50"
          value={values.type}
          onChange={onChange}
        />
      </label>
      <br />
      <label>
        Start Time:
        <input
          name="start_time"
          type="text"
          placeholder="Start Time..."
          maxLength="50"
          value={values.start_time}
          onChange={onChange}
        />
      </label>
      <br />
      <label>
        Duration:
        <input
          name="duration"
          type="text"
          placeholder="Duration..."
          maxLength="50"
          value={values.duration}
          onChange={onChange}
        />
      </label>
      <br />
      <label>
        Difficulty:
        <input
          name="intensity_level"
          type="text"
          placeholder="Difficulty..."
          maxLength="50"
          value={values.intensity_level}
          onChange={onChange}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          name="location"
          type="text"
          placeholder="Location..."
          maxLength="50"
          value={values.location}
          onChange={onChange}
        />
      </label>
      <br />
      <label>
        Max Class Size:
        <input
          name="max_class_size"
          type="text"
          placeholder="Max Class Size..."
          maxLength="50"
          value={values.max_class_size}
          onChange={onChange}
        />
      </label>
      <br />
      <div className="submit">
        <button>Create Class</button>
      </div>
    </form>
  );
}
