import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./style";

interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: "big" | "medium";
  color: "primary" | "grey" | "transparent";
}

export const Button = ({ color, size, children, ...rest }: iButtonProps) => {
  return (
    <StyledButton color={color} size={size} {...rest}>
      {children}
    </StyledButton>
  );
};
