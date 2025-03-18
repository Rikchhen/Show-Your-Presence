import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color:rgb(242, 214, 176);
  margin-left:380px
`;

export const LoginBox = styled.div`
  display: flex;
  width: 800px;
  height:500px;
  max-width: 90%;
  background-color:rgb(246, 244, 210);
  border: 2px solid black;
 
`;

export const FormContainer = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: black;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  color: black;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 2px solid black;
  font-size: 16px;
  margin-bottom: 15px;
  background: transparent;
  outline: none;
  padding-left: 5px;

  &:focus {
    border-bottom: 2px solid #333;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background-color: #444;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 3px 3px 0px black;

  &:hover {
    background-color: #222;
    box-shadow: 2px 2px 0px black;
  }
`;

export const RegisterText = styled.p`
  margin-top: 15px;
  font-size: 14px;
  color: skyblue;
`;

export const RegisterLink = styled.a`
  color:rgb(128, 249, 251);
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
