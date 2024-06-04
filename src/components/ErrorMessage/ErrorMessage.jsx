import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css.error}>
      <p>Opps, something went wrong. Please try again later. </p>
    </div>
  );
};

export default ErrorMessage;
