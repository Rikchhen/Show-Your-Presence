import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color:rgb(242, 214, 176);
  position: relative; 

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    backdrop-filter: blur(30px);
    z-index: 0;
  }
`;


export const RegisterBox = styled.div`
  width: 350px;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  background-color: rgb(246, 244, 210);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: relative;
`;

export const Logo = styled.img`
  width: 180px;
  height:120px;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: black;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  border-bottom: 1px solid black;
  font-size: 16px;
  margin-bottom: 10px;
  background: transparent;
  outline: none;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #444;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #222;
  }
`;

export const LoginRed= styled.p`
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 250px
`;