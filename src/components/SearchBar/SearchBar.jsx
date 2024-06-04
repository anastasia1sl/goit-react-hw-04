import css from "./SearchBar.module.css";
import { Field, Formik, Form, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    const query = values.query;

    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }

    onSubmit(values);
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="query"
            placeholder="Search images and photos"
          ></Field>
          <ErrorMessage name="query" component="span" />
          <Toaster position="top-center" />

          <button type="submit" className={css.button}>
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
