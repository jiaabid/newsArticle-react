import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useHelper } from "./helper";


const SignUp = () => {

  const navigate = useNavigate()
  const { isLoading,isDisabled,login } = useHelper()
  const { values, initialValues, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values)
      await login(values)
      resetForm({})
      navigate("/app")
    }
  })
  return (
    <>
      <div className="mainDiv">
        <div className="signImg">
          <img src="https://lynnhuber.com/wp-content/uploads/2020/11/blog-post-type-2-news-current-events.jpg" />
        </div>
        <div className="centerDiv">

          <h1>SignIn</h1>
          <form onSubmit={handleSubmit}>
            <div class="mb-2">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email"
                value={values.email}
                onChange={handleChange}
                class="form-control"
                id="exampleInputEmail1"
                name="email"
                aria-describedby="emailHelp" />
            </div>
            <div class="mb-2">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password"
                class="form-control"
                id="exampleInputPassword1"
                value={values.name}
                onChange={handleChange}
                name="password"
              />
            </div>

            <button type="submit" disabled={isDisabled}>SignIn 
            { isLoading && <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>}</button>
            <p>don't have an account? <a onClick={() => { navigate("/signUp") }}>SignUp</a> </p>
          </form>
        </div>
      </div>
    </>
  )
}
export default SignUp;