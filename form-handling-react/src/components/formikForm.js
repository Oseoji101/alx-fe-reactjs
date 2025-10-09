import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function FormikForm() {
  return (
    <div>
      <h2>User Registration (Formik)</h2>

      
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Submitted:", values);
          alert("Form submitted successfully!");
          resetForm(); 
        }}
      >
        
        <Form >
          <label>
            Username:
            
            <Field name="username" placeholder="Enter username" />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red", fontSize: "0.8em" }}
            />
          </label>

          <label>
            Email:
            <Field name="email" placeholder="Enter email" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red", fontSize: "0.8em" }}
            />
          </label>

          <label>
            Password:
            <Field
              name="password"
              type="password"
              placeholder="Enter password"
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red", fontSize: "0.8em" }}
            />
          </label>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
