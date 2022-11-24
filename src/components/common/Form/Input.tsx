import React,{InputHTMLAttributes} from "react";
import { Group, FormInputLabel, Input } from "./styles/Input";

type InputFormProps = {
  label: string;

} & InputHTMLAttributes<HTMLInputElement>

const InputForm : React.FC<InputFormProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={Boolean(otherProps.value && typeof otherProps.value === "string" && otherProps.value.length)}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default InputForm;
