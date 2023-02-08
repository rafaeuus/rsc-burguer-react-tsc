import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../Contexts/UserContext/UserContext";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { loginSchema } from "./loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { iFormData } from "../../../Contexts/UserContext/types";
import { SubmitHandler } from "react-hook-form/dist/types";
import { StyledForms } from "../style";
import { StyledLink } from "../../../styles/StyledLink";
import { StyledLoading } from "../../../styles/StyledLoading";

export const FormsLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iFormData>({
    resolver: yupResolver(loginSchema),
  });
  const { makeLogin, loading } = useContext(UserContext);

  const submit: SubmitHandler<iFormData> = (data) => {
    makeLogin(data);
    reset();
  };

  return (
    <StyledForms>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(submit as () => void)}>
        <div className="input-div">
          <Input
            error={errors.email && errors.email.message}
            label="E-mail"
            type="email"
            register={register("email")}
          />
        </div>
        <div className="input-div">
          <Input
            error={errors.password && errors.password.message}
            label="Senha"
            type="password"
            register={register("password")}
          />
        </div>
        <Button color="primary" size="big" type="submit">
          {loading ? <StyledLoading /> : "Logar"}
        </Button>
      </form>
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
      <StyledLink type="filled" to="/register">
        Cadastrar
      </StyledLink>
    </StyledForms>
  );
};
