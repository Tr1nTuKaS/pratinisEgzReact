import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import { useState } from "react";
import Header from "../component/Header";

import style from "./registerForm.module.css";

const RegisterForm = () => {
  const history = useHistory();
  const [formSuccess, setFormSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email().min(4).max(25).required(),
      password: Yup.string().min(5).required(),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required(),
    }),
    onSubmit: async (values) => {
      const resp = await fetch("http://localhost:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await resp.json();

      if (data.error) {
        toast.error("Please check the form");
      }
      if (data.msg) {
        toast.success("Successfully registered");
        setFormSuccess(true);
        history.replace("/login");
      }
    },
  });
  return (
    <section>
      <Header />
      <div>
        {formSuccess ? (
          <h2>You have successfully registered</h2>
        ) : (
          <div>
            <form className={style.form} onSubmit={formik.handleSubmit}>
              <input
                className={style.inp}
                name="email"
                placeholder="Email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <span>{formik.errors.email}</span>
              ) : null}
              <input
                className={style.inp}
                name="password"
                placeholder="Password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <span>{formik.errors.password}</span>
              ) : null}
              <input
                className={style.inp}
                name="repeatPassword"
                placeholder="Repeat password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repeatPassword}
              />
              {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
                <span>{formik.errors.repeatPassword}</span>
              ) : null}

              <button className={style.btn} type="submit">
                Registracija
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default RegisterForm;
