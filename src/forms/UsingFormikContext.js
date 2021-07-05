import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../styles.css";

const UsingFormikContext = () => {

    // Form
    return (
    
        // Formik
        <Formik
            initialValues = {{ firstName: '', lastName: '', email: '', petName: '', message: '', colors: 'red' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
                lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                message: Yup.string()
                .min(5, 'Must be 5 characters or more')
                .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                {/* its now more simplified with formik components */}
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" />
                <ErrorMessage name="firstName" />

                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" />
                <ErrorMessage name="lastName" />

                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />        
                
                {/* we can add our own class // placeholder="sparky" */}
                <label htmlFor="petName">Pet Name</label>
                <Field name="petName" className="My-Class-Name" placeholder="only dogs admited" />
                <ErrorMessage name="petName" />

                {/* <textarea className="form-textarea"/></textarea> */}
                <label htmlFor="message">Text Area</label>
                <Field name="message" as="textarea" className="form-textarea" />
                <ErrorMessage name="message" />

                {/* <select className="my-select"/> */}
                <label htmlFor="colors">Select</label>
                <Field name="colors" as="select" className="my-select">
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </Field>

                <br/>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
  };

  export default UsingFormikContext;