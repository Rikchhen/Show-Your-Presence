import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
});

//Funvtion to get token
const getAuthConfig = () => {
    const token = localStorage.getItem("token");
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
};


export const loginApi = async (data) => {
    try {
        const response = await Api.post("/auth/login", data);
        const { access_token, user } = response?.data || {};

        if (access_token && user) {
            localStorage.setItem("token", access_token);
            localStorage.setItem("isAdmin", JSON.stringify(user.isAdmin)); 
            console.log("Stored isAdmin:", user.isAdmin);
        } else {
            console.error("Login failed: No token or user data received.");
        }

        return response.data;
    } catch (error) {
        console.error("Login API Error:", error.response?.data || error.message);
        throw error.response?.data || error;
    }
};



export const registerApi = async (data) => {
    try {
        const response = await Api.post("/users/create", data);
        console.log("API Response:", response);
        return response.data;
    } catch (error) {
        console.error("Registration API Error:", error.response?.data || error.message);
        throw error.response?.data || error;
    }
};


export const getCurrentUser = async () => {
    try {
        const response = await Api.get("/auth/init", getAuthConfig());
        return response.data;
    } catch (error) {
        console.error("Get Current User API Error:", error.response?.data || error.message);
        throw error.response?.data || error;
    }
};

//Logout Function {This removes the token from local storage}
export const logout = () => {
    localStorage.removeItem("token");
    console.log("User logged out, token removed.");
    window.location.href = "/"; 
};

//Get All Users
export const getAllUsers = async () => {
    try {
        const response = await Api.get("/users", getAuthConfig());
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error.response?.data || error.message);
        return [];
    }
};

// 🔹 Delete User by ID
export const deleteUserById = async (id) => {
    try {
        const response = await Api.delete(`/users/${id}`, getAuthConfig());
        return response.data;
    } catch (error) {
        console.error("Error deleting user:", error.response?.data || error.message);
        throw error;
    }
};

// 🔹 Update User
export const updateUserById = async (id, userData) => {
    try {
        const response = await Api.put(`/users/${id}`, userData, getAuthConfig());
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error.response?.data || error.message);
        throw error;
    }
};

// Add Student
export const addStudent = async (formData) => {
    const token = localStorage.getItem("token");
    try {
        const response = await Api.post("/students/create", formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data", // If you're sending form data (files included)
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error adding student:", error.response?.data || error.message);
        throw error;
    }
};


// Get All Students
export const getAllStudents = async () => {
    try {
        const response = await Api.get("/students");
        return response.data;
    } catch (error) {
        console.error("Error fetching students:", error.response?.data || error.message);
        return [];
    }
};

// Get Student by ID
export const getStudentById = async (id) => {
    try {
        const response = await Api.get(`/students/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching student with ID ${id}:`, error.response?.data || error.message);
        return null;
    }
};

// Update Student
export const updateStudent = async (id, updatedData) => {
    try {
        const token = localStorage.getItem("token"); // Get the token
        const response = await Api.put(`/students/${id}`, updatedData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Add token for authentication
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error updating student:", error.response?.data || error.message);
        throw error;
    }
};

// Update Student by ID
export const updateStudentById = async (id, updatedData) => {
    const token = localStorage.getItem("token"); // Get the token
    try {
        const response = await Api.put(`/students/${id}`, updatedData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Add token for authentication
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error updating student:", error.response?.data || error.message);
        throw error;
    }
};


// Delete Student by ID
export const deleteStudentById = async (id) => {
    const token = localStorage.getItem("token");
    try {
        const response = await Api.delete(`/students/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting student:", error.response?.data || error.message);
        throw error;
    }
};


export default Api;
