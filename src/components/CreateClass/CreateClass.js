import React, { useState } from "react";
import Classform from "./Classform";
import { addClass } from "../../actions/index";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const initialFormValues = {
  name: "",
  type: "",
  start_time: "",
  duration: "",
  intensity_level: "",
  location: "",
  max_class_size: "",
};

function CreateClass(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const history = useHistory();

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newClass = {
      name: formValues.name,
      type: formValues.type,
      start_time: formValues.start_time,
      duration: formValues.duration,
      intensity_level: formValues.intensity_level,
      location: formValues.location,
      max_class_size: formValues.max_class_size,
    };
    props.addClass(newClass);
    history.push('/browse');
  };

  return (
    <div>
      <Classform values={formValues} update={updateForm} submit={submitForm} />
    </div>
  );
}

export default connect(null, { addClass })(CreateClass)