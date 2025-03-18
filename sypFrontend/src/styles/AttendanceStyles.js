import styled from "styled-components";

export const AttendanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const NavFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: #rgb(242, 214, 176);
  padding: 0 20px;
`;

export const NavItemsFrame = styled.div`
   display: flex;
   gap: 50px;
   align-items: center;
`;

export const NavItems = styled.p`
   font-size: 24px;
   font-family: 'Inconsolata', monospace;
   font-weight: 600;
   color: rgb(246, 244, 210);
   text-align: center;
   cursor: pointer;
   margin-right:50px;
   transition: all 0.3s ease-in-out;

   &:hover {
      color: rgb(246, 244, 210);
      transform: scale(1.09);
   }

   &:active {
      color: rgb(246, 244, 210);
   }
`;

export const NavTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: rgb(246, 244, 210);
`;

export const LogoutButton = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: rgb(246, 244, 210);
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: rgb(246, 244, 210);
  }
`;

export const ContentFrame = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: rgba(253, 242, 171, 0.8);
`;

export const Dashboard = styled.div`
  width: 220px;
  background-color: rgba(253, 242, 171, 0.8);
  padding: 20px;
  height: 100%;
`;

export const DashboardTitle = styled.h2`
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
`;

export const DashboardItem = styled.p`
  font-size: 16px;
  color: #000000;
  cursor: pointer;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  transition: background 0.3s ease;
  &:hover {
    background-color: rgba(253, 242, 171, 0.8);
    color: rgb(243, 239, 169);
  }
`;

export const UserMenuTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #f5f5f5;
  cursor: pointer;
  &:hover {
    color: rgb(246, 244, 210);
  }
`;

export const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  margin: auto;
  margin-top: 50px;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  background: rgb(246, 244, 210);
  padding: 10px;
  border-radius: 5px;
  color: black;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  color: black;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 80px;
`;

export const StatusSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  background-color: rgb(246, 244, 210);
  color: #222;
  font-size: 16px;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: rgb(246, 244, 210);
  }
`;

export const FileInputLabel = styled.label`
  background-color: #fff;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #000;
  cursor: pointer;
`;

export const TableContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(253, 242, 171, 0.8);
  background: white;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  color: black;
`;

export const TableHeader = styled.th`
  background-color: rgb(246, 244, 210);
  padding: 12px;
  text-align: left;
  font-weight: bold;
`;

export const TableData = styled.td`
  padding: 12px;
  text-align: left;
`;

export const ActionButton = styled.button`
  background-color: #ff5733;
  color: white;
  font-size: 14px;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  transition: background 0.3s ease;
  &:hover {
    background-color: #ff2e00;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 5px;
`;
