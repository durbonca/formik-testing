import { useFormik } from "formik";
import "./styles.css";

const SignupForm = () => {
    const formik = useFormik({
      initialValues: { name: "", email: "" },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      }
    });

    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
    );
  };

  export default SignupForm;