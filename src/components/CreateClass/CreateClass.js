import React, { useState, useEffect } from "react";
import Classform from "./Classform";
import Class from "./Class";
import { axiosWithAuth } from "../../utils/axiosWithAuth";


const initialFormValues = {
  name: "",
  type: "",
  start_time: "",
  duration: "",
  intensity_level: "",
  location: "",
  max_class_size: "",
};

export default function CreateClass() {
  const [classes, setClasses] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

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
    console.log(newClass);
    axiosWithAuth()
      .post("/api/classes", newClass)
      .then((res) => {
        console.log(res);
        setClasses([newClass, ...classes]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    axiosWithAuth().get("/api/classes ")
    .then((res) => setClasses(res.data));
  }, []);


  return (
    <div>
      <Classform values={formValues} update={updateForm} submit={submitForm} />
    {/* <div>
      <h2>My Classes</h2>
      {classes.map((c) => {
        return <Class key={c.id} details={c} />;
      })}
    </div> */}
    </div>
  );
}
