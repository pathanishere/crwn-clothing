import "./form-input.style.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      <label
        className={`${
          otherProps.value.length ? "shri nk" : ""
        } form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
