import styled from 'styled-components';

export const MainContainer= styled.div`
    display:flex;
    height:800px;
    width:1520px;
    background-color:black;
    flex-direction:column;
`;

export const TopContainer= styled.div`
    display:flex;
    height:100px;
    width:1520px;
    background-color:#f5efeb;
`;

export const TopContainerLogo=styled.img`
    height:100px;
    width:100px;
`;

export const TopContainerButton=styled.button`
    width: 140px;
    height:50px;
    padding: 10px;
    margin-top: 25px;
    margin-left:1200px;
    background-color: #17467C;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #222;
    }
`;

export const LoginContent=styled.div`
    display:flex;
    height:700px;
    width:1520px;
    background-color:white;
`;

export const LogoSection=styled.div`
    height:700px;
    width:800px;
    background-color:white;
`;

export const LogoSectionImage=styled.img`
    height:600px;
    width:600px;
    margin-top:70px;
    margin-left:90px;
`;

export const LoginBox = styled.div`
    height:700px;
    width:720px;
    background-color:#f5efeb;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-top:10px
  margin-bottom: 20px;
  color: black;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  color: black;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  margin-top: 10px;
  background: white;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 30px;
  background-color: #17467C;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #222;
  }
`;


