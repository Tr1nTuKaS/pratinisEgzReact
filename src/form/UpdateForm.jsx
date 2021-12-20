import { useFormik } from "formik";
import * as Yup from "yup";
import style from "./newForm.module.css";

import { useHistory } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const url = "http://localhost:8000/posts/";

export default function UpdateForm() {
  const { id } = useParams();
  const history = useHistory();

  const [posts, setPosts] = useState([]);

  useEffect((name, age, email, password) => {
    axios.get(`${url}edit/${id}`).then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3).max(50).required(),
      age: Yup.number().min(18).required(),
      email: Yup.string().required(),
      password: Yup.string().min(5).max(255).required(),
    }),
    onSubmit: (values) => {
      handleSubmit(values.name, values.age, values.email, values.password);
    },
  });
  const handleSubmit = async (name, age, email, password) => {
    await fetch(`http://localhost:8000/posts/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, email, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
    history.push("/");
  };
  return (
    <>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <input
          className={style.inp}
          name={"name"}
          placeholder={"Name"}
          type={"name"}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <span>{formik.errors.name}</span>
        ) : null}
        <input
          className={style.inp}
          name={"age"}
          placeholder={"Age"}
          type={"number"}
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.age && formik.errors.age ? (
          <span>{formik.errors.age}</span>
        ) : null}
        <input
          className={style.inp}
          name={"email"}
          placeholder={"Email"}
          type={"text"}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <span>{formik.errors.email}</span>
        ) : null}
        <input
          className={style.inp}
          name={"password"}
          placeholder={"Password"}
          type={"password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <span>{formik.errors.password}</span>
        ) : null}

        <button type={"submit"}>Atnaujinti</button>
      </form>
    </>
  );
}
