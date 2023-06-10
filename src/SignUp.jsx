import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik'
import { useHelper } from "./helper";

const SignUp = () => {

  const navigate = useNavigate()
  const {registerUser} = useHelper()
  const { values, initialValues, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: ""
    },
    onSubmit:async (values, { resetForm }) => {
      console.log(values)
     await registerUser(values)
     resetForm({})
     navigate("/app") 
    }
  })

  return (
    <>
      <div className="mainDiv">
        <div className="centerDiv">
          <h1>SignUp</h1>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name</label>
              <input type="text"
                value={values.name}
                onChange={handleChange}
                class="form-control"
                id="exampleInputEmail1"
                name="name" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail2" class="form-label">Email address</label>
              <input type="email" 
              onChange={handleChange}
                value={values.email} 
                class="form-control"
                 id="exampleInputEmail2"
                 name="email" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" 
              onChange={handleChange}
                value={values.password} 
                class="form-control"
                 id="exampleInputPassword1"
                 name="password" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
              <input type="password" 
              onChange={handleChange}
                value={values.confirm_password}
                 class="form-control" 
                 id="exampleInputPassword2" 
                 name="confirm_password"/>
            </div>

            <button type="submit" >Submit</button>
            <p>Already have an Account? <a onClick={() => { navigate("/") }}>SignIn</a> </p>
          </form>
        </div>
      </div>
    </>
  )
}
export default SignUp;

            // <button type="submit" onClick={() => { navigate("/app") }}>Submit</button>
