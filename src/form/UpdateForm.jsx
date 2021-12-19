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
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });

  useEffect(() => {
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
      handleEdit(values.name, values.age, values.email, values.password);
    },
  });
  const handleEdit = async (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/posts/update/${id}`)
      .then((res) => {
        console.log(res.data.data);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form className={style.form} onSubmit={formik.handleEdit}>
        <input className={style.inp} name={"id"} placeholder={id} />

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
          type={"email"}
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
