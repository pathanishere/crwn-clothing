import { FormInputLabel, FormInputStyle, Group } from "./form-input.style";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputStyle {...otherProps} />
      <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
    </Group>
  );
};

export default FormInput;
