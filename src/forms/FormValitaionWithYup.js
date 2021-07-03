import { useFormik } from "formik";
import "../styles.css";

const FormValitaionWithYup = () => {
    
    // A custom validation function. This must return an object
    // which keys are symmetrical to our values/initialValues
    const validate = values => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Required';
      } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
      }

      if (!values.age) {
        errors.age = 'Age is Required!';
      } else if (!/^[0-9]*$/g.test(values.age)){
        errors.age = 'This don\'t look as a number...';
      } else if (values.age.length > 2) {
        errors.age = 'you cant be more of 99 years old!';
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors;
    };

    // Formik
    const formik = useFormik({
      initialValues: { name: "", age: "", email: "" },
      validate,
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      }
    });

    // Form
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {/* noticed were using formik.touched.'property' to check errors just when onBlur is true */}
        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}

        <label htmlFor="lastName">Age</label>
        <input
          id="age"
          name="age"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {/* noticed were using formik.touched.'property' to check errors just when onBlur is true */}
        {formik.touched.age && formik.errors.age ? <div className="error">{formik.errors.age}</div> : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {/* noticed were using formik.touched.'property' to check errors just when onBlur is true */}
        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        <br/>
        <button type="submit">Submit</button>
      </form>
    );
  };

  export default FormValitaionWithYup;