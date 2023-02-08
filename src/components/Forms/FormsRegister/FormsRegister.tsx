import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../../Contexts/UserContext/UserContext";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { iFormData } from "../../../Contexts/UserContext/types";
import { StyledForms } from "../style";
import { StyledLink } from "../../../styles/StyledLink";
import { StyledLoading } from "../../../styles/StyledLoading";

interface iRegisterData extends iFormData {
  confirmPassword: string;
}

export const FormsRegister = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
    reset,
  } = useForm<iRegisterData>({
    resolver: yupResolver(registerSchema),
  });
  const { loading, makeRegister } = useContext(UserContext);

  const submit: SubmitHandler<iRegisterData> = (data) => {
    const newData: iFormData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    makeRegister(newData);
    reset();
  };

  return (
    <StyledForms>
      <div>
        <h2>Cadastro</h2>
        <StyledLink type="empty" to="/">
          Retornar para o login
        </StyledLink>
      </div>
      <form onSubmit={handleSubmit(submit as () => void)}>
        <Input
          label="Nome"
          type="text"
          register={register("name")}
          error={errors.name && errors.name.message}
        />
        <Input
          label="E-mail"
          type="email"
          register={register("email")}
          error={errors.email && errors.email.message}
        />
        <Input
          label="Senha"
          type="password"
          register={register("password")}
          error={errors.password && errors.password.message}
        />
        <Input
          label="Confirmar Senha"
          type="password"
          register={register("confirmPassword")}
          error={errors.confirmPassword && errors.confirmPassword.message}
        />
        <Button
          disabled={
            formState.isSubmitted ? (formState.isValid ? false : true) : false
          }
          size="big"
          color={
            formState.isSubmitted
              ? formState.isValid
                ? "primary"
                : "grey"
              : "primary"
          }
        >
          {loading ? <StyledLoading /> : "Cadastrar"}
        </Button>
      </form>
    </StyledForms>
  );
};
