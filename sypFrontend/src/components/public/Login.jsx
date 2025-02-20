import React from 'react';
import { 
    MainContainer,
    TopContainer,
    TopContainerLogo,
    TopContainerButton,
    LoginContent,
    LogoSection,
    LogoSectionImage,
    LoginBox,
    Label,
    Title,
    Input,
    Form,
    Button,

} from '../../styles/LoginStyles';
import logo from '../../../public/assets/images/logo.png'

const LoginPage = () => {
  return (
    <MainContainer>
        <TopContainer>
          <TopContainerLogo src={logo} alt="Logo"/> 
          <TopContainerButton>Sign Up</TopContainerButton>
        </TopContainer>
        <LoginContent>
        <LogoSection>
          <LogoSectionImage src={logo}/>
        </LogoSection>
        <LoginBox>
        <Title>Sign In</Title>

        <Form>
          <Label>Email :</Label>
          <Input type="email" />

          <Label>Password:</Label>
          <Input type="password" />

          <Button>Sign In</Button>
        </Form>

        
       
     
        </LoginBox>
        </LoginContent>

       
    </MainContainer>
  );
};

export default LoginPage;
