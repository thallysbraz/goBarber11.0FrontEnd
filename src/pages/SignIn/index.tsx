import React from "react";
import { FiLogIn } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Container, Content, Background } from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <form>
          <img src={logoImg} alt="Logo" />

          <h1>Faça seu logon</h1>
          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>

          <a href="/">Esqueci minha senha</a>
        </form>

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
