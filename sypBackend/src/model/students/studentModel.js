import { DataTypes } from "sequelize";
import { sequelize } from "../../database/index.js";

export const Student = sequelize.define(
  "Student",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
    parent: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    presence: {
      type: DataTypes.ENUM("absent", "present"),
      allowNull: false,
      defaultValue: "absent",
    },
    grade: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
      }
    
  },
  {
    timestamps: true,
    tableName: "student",
  }
);

export default Student;