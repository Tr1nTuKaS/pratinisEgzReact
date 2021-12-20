import { useFormik } from "formik";
import { useHistory } from "react-router";
import * as Yup from "yup";
import { useAuthContext } from "../store/AuthContext";
import style from "./LoginForm.module.css";
import Header from "./../component/Header";

function Login() {
  const history = useHistory();
  const { login } = useAuthContext();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email()
        .min(4, "minimum 4 characters")
        .max(15, "maximum 15 characters")
        .required(),
      password: Yup.string()
        .min(4, "minimum 4 characters")
        .max(15, "maximum 15 characters")
        .required(),
    }),
    onSubmit: (values) => {
      handleSubmit(values.email, values.password);
    },
  });

  const handleSubmit = async (email, password) => {
    const resp = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await resp.json();
    const { token, foundUser: user } = data;
    console.log(data);
    if (login(token, user)) {
      history.replace("/user");
    }
  };

  return (
    <section>
      <Header />
      <form className={style.form} onSubmit={formik.handleSubmit}>
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
          placeholder={"password"}
          type={"password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <span>{formik.errors.password}</span>
        ) : null}
        <button className={style.btn} type={"submit"}>
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
