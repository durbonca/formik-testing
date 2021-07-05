import { useFormik } from "formik";
import * as Yup from 'yup';
import "../styles.css";

const FormValitaionWithYup = () => {

    // Formik
    const formik = useFormik({
      initialValues: { userName: "", phone: "", email: "" },
      
      // validate with YUP api
      validationSchema: Yup.object({
        userName: Yup.string()
          .max(15, 'Must be max 15 characters or less')
          .min(2, 'Must be at least 2 characters or more')
          .required('The Required'),
        phone: Yup.number()
          .typeError('must be a number')
          .min(11111111, 'Must be 8 characters or more')
          .max(999999999, 'Must be 9 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      }),

      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      }
    });

    // Form
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">Username</label>
        <input
          id="userName"
          name="userName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
        />
        {/* noticed were using formik.touched.'property' to check errors just when onBlur is true */}
        {formik.touched.userName && formik.errors.userName ? <div className="error">{formik.errors.userName}</div> : null}

        <label htmlFor="lastName">phone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {/* noticed were using formik.touched.'property' to check errors just when onBlur is true */}
        {formik.touched.phone && formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="text"
          
          /* you also can spread all the values to formik as props */
          /* name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email} */

          {...formik.getFieldProps('email')}

        />
        {/* noticed were using formik.touched.'property' to check errors just when onBlur is true */}
        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        <br/>
        <button type="submit">Submit</button>
      </form>
    );
  };

  export default FormValitaionWithYup;