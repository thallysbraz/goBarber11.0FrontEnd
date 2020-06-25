/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useRef, useContext } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import getValidationErrors from "../../utils/getValidationErrors";
import AuthContext from "../../context/AuthContext";

import logoImg from "../../assets/logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, Background } from "./styles";

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { name } = useContext(AuthContext);
  console.log(name);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().required("Senha obrigatória"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <img src={logoImg} alt="Logo" />

          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>

          <a href="/">Esqueci minha senha</a>
        </Form>

        <a href="/">
          <FiLogIn size={16} />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
