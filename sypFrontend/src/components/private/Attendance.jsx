import React, { useState, useEffect } from "react";
import {
  AttendanceContainer,
  NavFrame,
  UserMenuTitle,
  ContentFrame,
  Dashboard,
  DashboardTitle,
  DashboardItem,
  NavTitle,
  NavItemsFrame,
  NavItems,
  FormContainer,
  Form,
  Input,
  TextArea,
  FileInputLabel,
  SubmitButton,
  StatusSelect,
  SectionTitle,
  Table,
  TableContainer,
  TableData,
  TableHeader,
  TableRow,
  ActionButton,
  ActionContainer,
} from "../../styles/AttendanceStyles";
import {
  getAllStudents,
  updateStudentById,
  deleteStudentById,
  addStudent,
  logout,
} from "../../apis/api";
import { Link } from "react-router-dom";

export default function Admin() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    parent: "",
    presence: "absent",
    grade: 1,
  });

  const [attendanceData, setAttendanceData] = useState({
    studentId: "",
    date: "",
    status: "present",
  });

  const token = localStorage.getItem("token");
  const [loadingStudent, setLoadingStudent] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [editingStudentId, setEditingStudentId] = useState(null);

  useEffect(() => {
    if (selectedOption === "viewStudent") {
      getAllStudents().then(setStudentList).catch(console.error);
    }
  }, [selectedOption]);

  const handleDeleteStudent = async (id) => {
    try {
      await deleteStudentById(id, token);
      setStudentList(studentList.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Failed to delete student.");
    }
  };

  const handleUpdateStudent = async (id, updatedData) => {
    try {
      await updateStudentById(id, updatedData, token);
      setStudentList(
        studentList.map((student) =>
          student.id === id ? { ...student, ...updatedData } : student
        )
      );
    } catch (error) {
      console.error("Error updating student:", error);
      alert("Failed to update student.");
    }
  };

  const handleEditStudent = (student) => {
    setEditingStudentId(student.id);
    setFormData({
      name: student.name,
      parent: student.parent,
      presence: student.presence,
      grade: student.grade,
    });
    setSelectedOption("addStudent");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Student form submission
  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    setLoadingStudent(true);

    try {
      if (editingStudentId) {
        await handleUpdateStudent(editingStudentId, formData);
        alert("Student updated successfully!");
      } else {
        await addStudent(formData);
        alert("Student added successfully!");
      }

      setFormData({
        name: "",
        parent: "",
        presence: "absent",
        grade: 1,
      });

      setEditingStudentId(null);
    } catch (error) {
      console.error("Error submitting student:", error);
      alert("Failed to submit student.");
    } finally {
      setLoadingStudent(false);
    }
  };

  return (
    <AttendanceContainer>
      {/* Sidebar */}
      <NavFrame>
        <NavTitle>Student Attendance System Admin Dashboard</NavTitle>
        <NavItemsFrame>
          <NavItems onClick={() => logout()}>Logout</NavItems>
        </NavItemsFrame>
      </NavFrame>

      {/* Main Content */}
      <ContentFrame>
        <Dashboard>
          <DashboardTitle>Teachers Dashboard</DashboardTitle>
          <DashboardItem onClick={() => setSelectedOption("addStudent")}>
            Add Student
          </DashboardItem>
          <DashboardItem onClick={() => setSelectedOption("viewStudent")}>
            View Students
          </DashboardItem>
        </Dashboard>

        {/* Add Student Form */}
        {selectedOption === "addStudent" && (
          <FormContainer>
            <SectionTitle>{editingStudentId ? "EDIT STUDENT" : "ADD STUDENT"}</SectionTitle>
            <Form onSubmit={handleStudentSubmit}>
              <Input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Student Name"
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="parent"
                value={formData.parent}
                placeholder="Parent Name"
                onChange={handleChange}
                required
              />
              <StatusSelect
                name="presence"
                value={formData.presence}
                onChange={handleChange}
                required
              >
                <option value="absent">Absent</option>
                <option value="present">Present</option>
              </StatusSelect>

              <Input
                type="number"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                placeholder="Grade"
                required
              />

              <SubmitButton type="submit" disabled={loadingStudent}>
                {loadingStudent ? "Submitting..." : editingStudentId ? "Update Student" : "Add Student"}
              </SubmitButton>
            </Form>
          </FormContainer>
        )}

        {/* View Students Table */}
        {selectedOption === "viewStudent" && (
          <FormContainer>
            <SectionTitle>VIEW STUDENTS</SectionTitle>
            <TableContainer>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Parent</TableHeader>
                    <TableHeader>Presence</TableHeader>
                    <TableHeader>Grade</TableHeader>
                    <TableHeader>Actions</TableHeader>
                  </TableRow>
                </thead>
                <tbody>
                  {studentList.map((student) => (
                    <TableRow key={student.id}>
                      <TableData>{student.name}</TableData>
                      <TableData>{student.parent}</TableData>
                      <TableData>{student.presence}</TableData>
                      <TableData>{student.grade}</TableData>
                      <TableData>
                        <ActionButton onClick={() => handleEditStudent(student)}>
                          Edit
                        </ActionButton>
                        <ActionButton
                          onClick={() => handleDeleteStudent(student.id)}
                        >
                          Delete
                        </ActionButton>
                      </TableData>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </FormContainer>
        )}
      </ContentFrame>
    </AttendanceContainer>
  );
}
