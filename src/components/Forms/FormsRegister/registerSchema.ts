import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório")
    .min(2, "O nome precisa ter no mínimo 2 caracteres"),
  email: yup
    .string()
    .required("Campo obrigatório")
    .email("Digite um e-mail válido"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(6, "A senha precisa ter no mínimo 6 caracteres"),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "As senhas precisam ser iguais"),
});
