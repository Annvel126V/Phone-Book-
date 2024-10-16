import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
const ContactForm = () => {
  const dispatch = useDispatch();

  const validationYupSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "ONLY WORDS")
      .min(3, "A minimum of 3 characters must be entered!")
      .max(50, "A maximum of 50 characters must be entered")
      .required("This field is required!"),
    number: Yup.string()
      .matches(/^[+\d\s]+$/, "ONLY NUMBERS!")
      .min(3, "A minimum of 3 characters must be entered!")
      .max(50, "A maximum of 50 characters must be entered")
      .required("This field is required!"),
  });

  const nameId = nanoid();
  const numberId = nanoid();
  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationYupSchema}
      >
        {({ isValid, values }) => (
          <Form className={s.form}>
            <label className={s.label} htmlFor={nameId}>
              Name
              <Field className={s.input} type="text" name="name" id={nameId} />
              <ErrorMessage name="name" component="div" className={s.error} />
            </label>

            <label className={s.label} htmlFor={numberId}>
              Number
              <Field
                className={s.input}
                type="text"
                name="number"
                id={numberId}
              />
              <ErrorMessage name="number" component="div" className={s.error} />
            </label>
            <button
              className={s.btn}
              type="submit"
              disabled={!isValid || !values.name || !values.number}
            >
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
