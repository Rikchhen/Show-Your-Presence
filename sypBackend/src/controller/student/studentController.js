import Student from "../../model/students/studentModel.js";
import { sequelize } from "../../database/index.js";

// Create a new student
export const create = async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        const { name, parent, presence, grade } = req.body;

        if (!name || !parent || !presence || !grade) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newStudent = await Student.create(
            { name, parent, presence, grade },
            { transaction }
        );

        await transaction.commit();
        res.status(201).json({ message: "Student added successfully", student: newStudent });
    } catch (error) {
        await transaction.rollback();
        console.error("Error adding student:", error);
        res.status(500).json({ error: "Failed to add student" });
    }
};

// Get all students
export const getAll = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.status(200).json(students);
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).json({ error: "Failed to fetch students" });
    }
};

// Get student by ID
export const getById = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) return res.status(404).json({ error: "Student not found" });

        res.status(200).json(student);
    } catch (error) {
        console.error("Error fetching student:", error);
        res.status(500).json({ error: "Failed to fetch student" });
    }
};

// Update student
export const update = async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        const { name, parent, presence, grade } = req.body;

        const student = await Student.findByPk(req.params.id);
        if (!student) return res.status(404).json({ error: "Student not found" });

        const updatedStudent = await student.update(
            { name, parent, presence, grade },
            { transaction }
        );

        await transaction.commit();
        res.status(200).json({ message: "Student updated successfully", student: updatedStudent });
    } catch (error) {
        await transaction.rollback();
        console.error("Error updating student:", error);
        res.status(500).json({ error: "Failed to update student" });
    }
};

// Delete student
export const deleteById = async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) return res.status(404).json({ error: "Student not found" });

        await student.destroy({ transaction });

        await transaction.commit();
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        await transaction.rollback();
        console.error("Error deleting student:", error);
        res.status(500).json({ error: "Failed to delete student" });
    }
};
