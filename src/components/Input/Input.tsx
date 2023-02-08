import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "./style";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register: UseFormRegisterReturn;
  error?: string;
}

export const Input = ({ error, label, register, ...rest }: iInputProps) => {
  return (
    <StyledInput error={error && error}>
      <div>
        <input {...rest} {...register} placeholder="toUse" />
        {label && <span>{label}</span>}
      </div>
      {error && <p>{error}</p>}
    </StyledInput>
  );
};
